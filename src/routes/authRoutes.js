const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const User = mongoose.model('User');
const router = express.Router();

router.post('/signup',async (req,res)=>{
  const {email, password, name} = req.body;
  console.log("desestructuring", email, password, name);
  try{
  const user = new User({email, password, name});
  await user.save();
  //res.json({message: 'User created'});
  console.log(req.body);

  const token = jwt.sign({userId: user._id}, process.env.JWT_SECRET, {expiresIn: '1h'});

  res.send({token, message:'User created'});
}catch(err){
  res.status(422).json({error: err.message});
}
})

router.post('/signin', async (req, res)=>{
  const { email, password, name } = req.body;
  console.log("Signin request:", req.body);

  if(!email || !password){
    return res.status(422).json({error: 'Must provide email and password'});
  }

  const user = await User.findOne({email});
  if(!user){
    return res.status(422).json({error: 'Invalid password or email'});
  }

  try{
  await user.comparePassword(password);
  const token = jwt.sign({userId: user._id}, process.env.JWT_SECRET);
  res.send({token, message:'User signed in'});

  }catch(err){
    return res.status(422).json({error: 'Invalid password or email'});
  }

})

module.exports = router;