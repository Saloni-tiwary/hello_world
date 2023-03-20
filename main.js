var http = require("http");
 http.createServer(function (request, response) {
    const body = 'Hello World';
response
  .writeHead(200, { 
    'Content-Length': Buffer.byteLength(body),
    'Content-Type': 'text/plain'
  })
  .end(body);
 }).listen(8000);
 console.log('Server running at http://127.0.0.1:8000/');
