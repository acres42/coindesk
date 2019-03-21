const express = require("express");
const axios = require("axios");
const app = express();
const port = 3000;

app.use(express.static("./public"));

app.listen(port, () => console.log(`App listening on port ${port}!`));
