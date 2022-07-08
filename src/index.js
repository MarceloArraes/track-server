require('./models/User');
require('dotenv').config({path: './.env'});
require('./models/Track');
const mongoose = require('mongoose');
const express = require('express');
const authRoutes = require('./routes/authRoutes');
const trackRoutes = require('./routes/trackRoutes');
const bodyParser = require('body-parser');
const requireAuth = require('./middlewares/requireAuth');


const app = express();

app.use(bodyParser.json());
app.use(authRoutes);
app.use(trackRoutes);

const mongoUri = process.env.MONGOURI

if (!mongoUri) {
  throw new Error(
    `MongoURI was not supplied.  Make sure you watch the video on setting up Mongo DB!`
  );
}

mongoose.connect(mongoUri);
mongoose.connection.on('connected', () => {
console.log('Connected to mongo instance');
})
mongoose.connection.on('error', (err) => {
console.log('Error connecting to mongo', err);
console.error('Error connecting to mongo', err);
}
)

app.get('/', requireAuth, (req, res) => {
  console.log(req.user);
  res.send(`Hello World! ${ req.user.email}`);
});

app.listen(3000, () => {
  console.log('listening on port 3000!');
});