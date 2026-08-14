
let http = require("http");
// console.log(http);

let server = http.createServer((req, res) => {
     console.log(req.method);
  if (req.url == "/") {
    res.end("Server running");
  } else if (req.url == "/about") {
    res.end("This is about page");
  } else if (req.url == "/homepage") {
    res.end("This is homepage");
  } else {
    res.end("No Route Found");
  }
});

server.listen(3000, () => {
  console.log(`server running on port 3000`);
});

