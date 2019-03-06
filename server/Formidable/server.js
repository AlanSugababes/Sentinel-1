const express = require("express");
const app = express();
var formidable = require('formidable');

app.get('/', function (req, res){
    res.sendFile(__dirname + '/index.html');
});

app.post('/', function (req, res){
    var form = new formidable.IncomingForm();

    form.parse(req);

    form.on('fileBegin', function (name, file){
        file.path = __dirname + '/uploads/' + file.name;
    });

    form.on('file', function (name, file){
        console.log('Uploaded ' + file.name);
    });

    res.sendFile(__dirname + '/index.html');
});

let display = {word:"insert bee movie script"};
app.get("/api/", (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');

  res.json(display);
});

// app.get("/", (req, res) => {
//   res.send(); v
// });

const port = 5000;

app.listen(port, () => "Server is running on port 5000");
