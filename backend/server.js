const express = require('express')
const cors = require('cors')
const fs = require('fs');
const path = require('path');

const app = express()

app.use(cors())
app.use(express.json())

app.post(new URL(process.env.BACKEND_URL).pathname, function (req, res) {
  res.send()
  fs.appendFile('out/email.list', `[${req.body.date}] ${req.body.email}\n`, err => {
    if (err) {
      console.error(err);
    }
  });
})

app.get(`${new URL(process.env.BACKEND_URL).pathname}${process.env.SECURE_KEY}/`, function (req, res) {
  res.sendFile('out/email.list',{root: path.join(__dirname)}, err => {
    if (err) {
      console.error(err);
    }
  })
})

app.listen(3000)