var express = require('express');
var router = express.Router();
var validate = require('./validate');
var controller = require('./controller');


router.get('/all',controller.controller.all);
router.post('/add',validate.validateAdd,controller.controller.add);
router.put('/update',validate.validateUpdate,controller.controller.update);
router.post('/delete',validate.validateDelete,controller.controller.delete);

module.exports = router;
