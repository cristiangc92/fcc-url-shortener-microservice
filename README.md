# URL Shortener Microservice

<h3>This is the boilerplate code for the URL Shortener Microservice project. Instructions for building your project can be found at https://www.freecodecamp.org/learn/back-end-development-and-apis/back-end-development-and-apis-projects/url-shortener-microservice.<br><br>

NOTA: No olvides usar un middleware para manejar las peticiones POST. También, puedes usar la función dns.lookup(host, cb) desde el módulo principal dns para verificar una URL enviada.</h3>

#

✅ Debes proporcionar tu propio proyecto, no la URL de ejemplo.<br>
✅ Puedes publicar una URL en /api/shorturl y obtener una respuesta JSON con las propiedades original_url y short_url. Aquí hay un ejemplo: { original_url : 'https://freeCodeCamp.org', short_url : 1}.<br>
✅ Cuando visitas /api/shorturl/<short_url>, serás redirigido a la URL original.<br>
✅Si pasas una URL inválida que no sigue el formato válido http://www.example.com , la respuesta JSON contendrá { error: 'invalid url' }.<br>
