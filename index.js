const express = require('express');
const app = express();
const port = 5000;

app.get("/", (req, res) => {
    res.send("welcome to my server");
})

app.listen(port, () => {
    console.log("server is running");
})