require('./models/User');
require('dotenv').config({path: './.env'});
const mongoose = require('mongoose');
const express = require('express');
const authRoutes = require('./routes/authRoutes');
const bodyParser = require('body-parser');
const requireAuth = require('./middlewares/requireAuth');


const app = express();

app.use(bodyParser.json());
app.use(authRoutes);

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

app.get('/', requireAuth, (req, res) => {
  console.log(req.user);
  res.send(`Hello World! ${ req.user.email}`);
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});