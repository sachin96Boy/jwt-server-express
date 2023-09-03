import express from 'express'
import jwt from 'jsonwebtoken';

const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)