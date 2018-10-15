var express = require('express');
var router = express.Router();
var path = require('path')

/* GET home page. */
router.get('/', function(req, res, next) {
  let fileName = path.join(__dirname, '../../FrontEnd/index.html')
  res.sendFile(fileName);
  console.log(fileName)
});

module.exports = router;
