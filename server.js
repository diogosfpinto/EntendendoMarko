//Importa a biblioteca do Mako
require("marko/node-require").install();

const http = require("http");

const page = require("./hello");
const port = 3000;

http.createServer((req, resp) => {
    page.render({ name: "Marko" }, resp);
})
.listen(port);
