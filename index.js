const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Express on Vercel"));

app.get("/todo", (req, res) => res.send("Holle THIPHON"));

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;