const http = require("http");

const users = [
  { id: 1, name: "Kane" },
  { id: 2, name: "John" },
  { id: 3, name: "Doe" },
];

console.log(users[0], users[1], users[2]);

const server = http.createServer((req, res) => {
  if (req.url === "/users") {
    res.write(JSON.stringify(users));
    res.end();
  } else if (req.url === "/users/1") {
    res.write(JSON.stringify(users[0]));
    res.end();
  } else if (req.url === "/users/2") {
    res.write(JSON.stringify(users[1]));
    res.end();
  } else {
    res.write(JSON.stringify(users[2]));
    res.end();
  }
});

const port = 3000;

server.on("connection", () => {
  console.log("Connection successful");
});

server.listen(3000, () => console.log(`Listening to Port: ${port}`));
