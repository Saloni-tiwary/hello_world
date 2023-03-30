 const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/api/hello-world') {
    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 200;
    res.end(JSON.stringify({ message: 'Hello, World!' }));
  } else {
    res.statusCode = 404;
    res.end('Page not found!');
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
