require('dotenv').config();
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const path = require('path');
const port = process.env.PORT;
const hostname = process.env.HOSTNAME

var app = express();
var server = http.createServer(app).listen(port, hostname, function () {
    console.log(`Server listening at http://${hostname}:${port}`);
});

//Display static pages (CSS)
app.use('/public', express.static(__dirname + '/public'));

//GET routes to display HTML pages
//home.html
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/tetris.html"));
});






