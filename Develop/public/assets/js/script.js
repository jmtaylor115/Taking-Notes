var express = require('express');
var app = express();
const {notes} = require('../db/db.json');

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname + '/notes.html'));
});

app.get('/api/notes', (req, res) => {
    var fs = require('fs');
    var dbInfo = fs.readFile('db.json');
    var info = JSON.parse(info);
    console.log(info);
});

import { uniqueNamesGenerator, Config, colors } from 'unique-names-generator';
const config = Config = {
    dictionaries: [colors]
}
var id = uniqueNamesGenerator(config);
app.post('/api/notes', (res, req) => {
    var title = document.getElementsByClassName('note-title');
    var body = document.getElementsByClassName('note-textarea');

    db.title = title;
    db.text = body;
    db.id = id;
})

app.listen(3001, () => {
    console.log('API server now on port 3001! Good Job!');
});

