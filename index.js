require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();

// Basic Configuration
const port = process.env.PORT || 3000;

app.use(cors());

app.use("/public", express.static(`${process.cwd()}/public`));

app.get("/", function (req, res) {
  res.sendFile(process.cwd() + "/views/index.html");
});

// Your first API endpoint
app.get("/api/hello", function (req, res) {
  res.json({ greeting: "hello API" });
});

const mongoose = require("mongoose");
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const bodyParser = require("body-parser");

const urlSchema = new mongoose.Schema({
  original: { type: String, required: true },
  short: Number,
});

const Url = mongoose.model("url", urlSchema);

app.use(bodyParser.urlencoded({ extended: false }));

app.post("/api/shorturl", (req, res) => {
  const { url } = req.body;
  const regExp =
    /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
  if (!url.match(regExp)) {
    res.json({ error: "invalid url" });
    return;
  }
  let shortUrl = 1;
  Url.findOne({ regExp })
    .sort({ short: -1 })
    .exec((err, result) => {
      if (!err && result != undefined) {
        shortUrl = result.short + 1;
      }
      if (!err) {
        Url.findOneAndUpdate(
          { original: url },
          { original: url, short: shortUrl },
          { new: true, upsert: true },
          (err, urlResult) => {
            if (err) console.log(err);
            res.json({ original_url: url, short_url: urlResult.short });
          }
        );
      }
    });
});

app.get("/api/shorturl/:short_url", (req, res) => {
  const { short_url } = req.params;
  Url.findOne({ short: short_url }, (err, data) => {
    if (err) console.log(err);
    res.redirect(data.original);
  });
});

app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});
