const express = require("express");

const bodyParser = require("body-parser");

const router = require("./router");

const server = express();

server.use(bodyParser.json());

router(server);

const port = 3000;

server.listen(port, () => console.log(`Listening to Port: ${port}`));
