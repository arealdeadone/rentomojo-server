var express = require('express');
var router = express.Router();
const passport = require('passport');
const mongoose = require('mongoose');
const User = mongoose.model('User');

const sendJSONresponse = (res, status, content) => {
  res.status(status);
  res.json(content);
};

/* GET users listing. */
router.post('/register', function(req, res, next) {
  const user = new User();
  user.name = req.body.name;
  user.email = req.body.email;

  user.setPassword(req.body.password);

  user.save((err)=> {
    token = user.generateJwt();
    sendJSONresponse(res, 200, {token});
  });
});

router.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    let token;
    if(err) {
      res.status(404).json(err);
      return;
    }

    if(user){
      token = user.generateJwt();
      sendJSONresponse(res, 200, {token});
    } else {
      res.status(401).json(info);
    }
  })(req, res);
});

module.exports = router;
