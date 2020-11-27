//Importa a biblioteca do Mako
require("marko/node-require");

const http = require('http');

const page = require("./hello");
const port = 3000;

http.createServer(function(req, resp){
    hello.render({ name: "Marko"}, resp)
}).listen(port);;
