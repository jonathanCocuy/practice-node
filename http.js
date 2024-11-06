const http = require("http");
const colors = require('colors');

/* 
? CREATESERVER funciona para crear el servidor
    $ req: es el request que se hace al servidor
    $ res: es el response que se envía al cliente
        * write: responde con un contenido
        * end: termina la respuesta
    $ listen: aquí coloco el puerto(port)
*/
const server = http.createServer(function (req, res) {
  console.log(req.url);
  if (req.url === "/profile") {
    res.write("Bienvenido a tu servidor NODE JS");
    return res.end();
  }

  res.write("Página no encontrada");
  res.end();
});

server.listen(3000);

console.log("Server running on port 3000...".green);
