const express = require('express');
const path = require('path');
const fs = require('fs')
const notes = require('db/db.json')
const id = ('./helper/uuid')
const api = require('.public/assets/js/index.js');

const PORT = process.env.port || 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// direct to home index page
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

// direct to notes page
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

// update json file as notes
app.get('/api/notes', (res, req) =>
res.json(notes))


// post notes to the server
app.post("/api/notes")

// delete notes from the server
app.delete


app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
