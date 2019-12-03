var express = require('express');
var userCtrl = require('../controllers/users');
var router = express.Router();

/* GET users listing. */
router.get('/', userCtrl.index);

router.put('/:id/role', userCtrl.update)

module.exports = router;
