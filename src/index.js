const express = require('express');
require('dotenv').config({path: './.env'});
const mongoose = require('mongoose');


const app = express();

const mongoUri = process.env.MONGOURI

mongoose.connect(mongoUri, {
useNewUrlParser: true,
});
mongoose.connection.on('connected', () => {
console.log('Connected to mongo instance');
})
mongoose.connection.on('error', (err) => {
console.error('Error connecting to mongo', err);
}
) 


app.get('/', (req, res) => {
  res.send('Hello World!');
});



app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});