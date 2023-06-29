const connectToMango = require('./db')
const mongoose = require('mongoose');
const express = require('express')

connectToMango();
const app = express();
const port = 5000;

// app.get('/', (req, res) => {
//   res.send('Hello Shyam ji!')
// })
app.use(express.json());

app.use('/api/auth',require('./routes/auth'))
app.use('/api/notes',require('./routes/auth'))


app.listen(port, () => {
  console.log(`listening on port ${port}`)
})