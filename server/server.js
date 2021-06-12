var express = require('express')
const fs = require('fs')
const path = require('path')
var cors = require('cors')

var app = express()

app.use(express.json())
app.use(cors())

app.post('/signup', function (req, res) {
  const { email } = req.body
  console.log(email)
  
  fs.appendFile(path.join(__dirname, '/data/signup-data.txt'), `${email}\n`, (error) => {
    if (error) {
      res.status(400).send({ message: 'Some error occured', error })
      throw err
    };
    res.status(200).send({ message: 'Email added successfully' })
  });
})

const PORT = process.env.PORT || 3001 
app.listen(PORT, () => console.log(`Server started on ${PORT}`))