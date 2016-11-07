'use strict'

const express = require('express')
const multer = require('multer')
const path = require('path')
const upload = multer({ dest: 'upload/' })
const app = express()


app.use(express.static('public'))

app.post('/upload', upload.any(), (req, res) => {
  res.json(req.files[0])
})

app.listen(process.env.PORT || 8080, () => {
  console.log('Server is listening')
})
