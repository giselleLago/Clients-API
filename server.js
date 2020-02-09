let express = require("express");
let client = require("./client")
let http = require("http");
let app = express();

app.use(express.json());
http.createServer(app).listen(3000);

app.get("/clients", function (req, res) {
    res.json(client.getAll());
    res.sendStatus(200);
});

app.get("/clients/:id", function (req, res) {
    let id = req.params.id;
    let foundClient = client.getById(id);
    if (foundClient === undefined) {
        res.sendStatus(404);
    } else {
        res.json(foundClient);
    }
});

app.post("/clients", function (req, res) {
    let newclient = req.body;
    client.create(newclient)
    res.sendStatus(202);
});

app.put("/clients/:id", function (req, res) {
    let id = req.params.id;
    let oldclient = req.body;
    let foundClient = client.getById(id);
    if (foundClient === undefined) {
        res.sendStatus(404);
    } else {
        client.update(oldclient);
        res.sendStatus(202);
    }
});

app.delete("/clients/:id", function (req, res){
    let id = parseInt(req.params.id);
    let foundClient = client.getById(id);
    if (foundClient === undefined) {
        res.sendStatus(404);
    } else {
        client.removeById(id);
        res.sendStatus(202);
    }
})