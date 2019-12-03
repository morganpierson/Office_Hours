const User = require('../models/User');

module.exports = {
  index,
  update
}

function index(req, res, next) {
  console.log(req.query);
  let modelQuery = req.query.name ? {name: new RegExp(req.query.name, 'i')} : {}

  let sortKey = req.query.sort || 'name';
  User.find(modelQuery).sort(sortKey).exec((err, user) => {
    if(err) return next(err);

    console.log("USER ", req.user)
    res.render('users/index', {
      user,
      name: req.query.name,
      sortKey,
      user: req.user
    })
  })  
}

function update(req, res) {
  console.log("BODY ", req.user)
  
  User.findById(req.params.id, (err, user) => {
    console.log(user);
    
    user.role = req.body.role ? req.body.role : user.role;
    user.city = req.body.city ? req.body.city : user.city;
    user.save((e) => {
      res.redirect('/users')
    })
  })
}