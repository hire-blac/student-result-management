require('dotenv').config();
const jwt = require('jsonwebtoken');
const Student = require('../models/student');

const tokenKey = process.env.TOKEN_KEY;

const requireAuth = (req, res, next) => {
  const token = req.cookies.jwt;

  // check if jwt exists and verify
  if(token) {
    jwt.verify(token, tokenKey, (err, decodedToken) => {
      if(err) {
        console.log("***********")
        console.log(err.message);
        res.redirect('/login');
      }
      else {
        next();
      }
    })
  }
  else {
    res.redirect('/login');
  }
}

// check current user
const checkStudent = (req, res, next) => {
  const token = req.cookies.jwt;

  // check if jwt exists and verify
  if(token) {
    jwt.verify(token, tokenKey, async (err, decodedToken) => {
      if(err) {
        console.log("+++++++++++++++");
        console.log(err.message);
        res.locals.user = null;
        next();
      }
      else {
        const student = await Student.findById(decodedToken.id);
        res.locals.user = student;
        next();
      }
    })
  }
  else {
    res.locals.user = null;
    next();
  }
}

module.exports = { requireAuth, checkStudent };