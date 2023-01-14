const express = require('express')
const cors = require('cors')
const fs = require('fs');
const path = require('path');

const app = express()

app.use(cors())
app.use(express.json())

app.post('/', function (req, res) {
  res.send()
  fs.appendFile('email.list', `[${req.body.date}] ${req.body.email}\n`, err => {
    if (err) {
      console.error(err);
    }
  });
})

app.get('/', function (req, res) {
  res.sendFile('email.list',{root: path.join(__dirname)}, err => {
    if (err) {
      console.error(err);
    }
  })
})

app.listen(80)