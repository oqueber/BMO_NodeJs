/**
 * @brief This example creates and sets up an HTTP server on the same IP as the device that is running it.
 * 
 * @system Raspberry zero 2W with Node.Js version v18.13.0
 * @author Oqueber Navarro
 */
const http = require('http');
var os = require('os');

// get network interfaces info like wlan0...
var networkInterfaces = os.networkInterfaces();

// get wifi IP and asigned http port
const hostname = networkInterfaces.wlan0[0].address;
const port = 8080;

// create server object
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end("<h1>Why don't scientists trust atoms? Because they make up everything!</h1>");
});

// Start http server
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});