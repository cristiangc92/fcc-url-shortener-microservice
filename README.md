# URL Shortener Microservice

<h3>Crea una aplicación full stack de JavaScript que sea funcionalmente similar a esta: https://url-shortener-microservice.freecodecamp.rocks/.<br><br>

NOTA: No olvides usar un middleware para manejar las peticiones POST. También, puedes usar la función dns.lookup(host, cb) desde el módulo principal dns para verificar una URL enviada.</h3>

#

# Tests

✅ Debes proporcionar tu propio proyecto, no la URL de ejemplo.<br><br>
✅ Puedes publicar una URL en /api/shorturl y obtener una respuesta JSON con las propiedades original_url y short_url. Aquí hay un ejemplo: { original_url : 'https://freeCodeCamp.org', short_url : 1}.<br><br>
✅ Cuando visitas /api/shorturl/<short_url>, serás redirigido a la URL original.<br><br>
✅Si pasas una URL inválida que no sigue el formato válido http://www.example.com , la respuesta JSON contendrá { error: 'invalid url' }.<br><br>
