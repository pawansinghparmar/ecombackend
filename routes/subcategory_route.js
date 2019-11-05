var express = require('express');
var router = express.Router();
var subcat=require('../controllers/subcategory_controller')
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a Sub Category');
});


router.post('/create',subcat.createSubcategory);

router.get('/findallsubcat',subcat.findallsubcategoryryryryr)

module.exports = router;
