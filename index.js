const http = require('http');

const PORT = 8000;
const server = http.createServer((req, res) => {
  res.end('Hello, world!');
});

// Make sure it listens on 0.0.0.0
server.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on http://0.0.0.0:${PORT}`);
});

