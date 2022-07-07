const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const User = mongoose.model('User');

module.exports = (req, res, next) => {
  const {authorization} = req.headers;
  if(!authorization){
    return res.status(401).json({error: 'You must be logged in1'});
  }
  console.log("Entered Authorization", authorization);
  const token = authorization.replace('Bearer ', '');
  jwt.verify(token, process.env.JWT_SECRET, async (err, payload) => {
    if(err){
      return res.status(401).json({error: 'You must be logged in2'});
    }
    const {userId} = payload;
    const user = await User.findById(userId);
    req.user = user;
    next();
  })

};