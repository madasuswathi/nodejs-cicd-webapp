
const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = process.env.PORT || 2000;

const server = http.createServer((req, res) => {
  if (req.url === "/health") {
    res.writeHead(200, { "Content-Type": "application/json" });
    return res.end(JSON.stringify({ status: "OK" }));
  }

  const filePath = path.join(__dirname, "public", "index.html");

  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(500);
      return res.end("Internal Server Error");
    }

    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(content);
  });
});

if (require.main === module) {
  server.listen(PORT, "0.0.0.0", () => {
    console.log(`Web app running on port ${PORT}`);
  });
}

module.exports = server;

