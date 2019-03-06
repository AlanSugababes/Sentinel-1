let express = require ("express");
let formidable = require ("formidable");
let fs = require ("fs");
let app = express();
let dir = __dirname + "/uploadedPDF";

if(!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
    console.log("Folder has successfully been created");
}

app.get("/", function (req, res){
});

app.post("/", function (req, res){
    let form = new.formidable.IncomingForm();
    form.parse(req);
    form.on("fileBegin", function (name, file){
        file.path = dir + file.name;
    });

    form.on("file", function (name, file){
        console.log("Uploaded " + file.name);
    });

    form.on("end", function(){
        console.log("File completely downloaded");
        res.sendFile(__dirname + "/uploadedPDF.html");
    });

});

module.exports = app;
