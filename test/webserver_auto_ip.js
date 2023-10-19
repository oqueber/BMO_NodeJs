const http = require('http');
var os = require('os');

var networkInterfaces = os.networkInterfaces();

const hostname = networkInterfaces.wlan0[0].address;
const port = 8080;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<h1>Hello Mr Oqueber</h1>');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});