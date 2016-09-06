var express = require('express');
var fs = require('fs');
var path = require('path');
var router = express.Router();


var fileName = path.join(process.cwd(), 'public/views/index.html');

/* GET home page. */
router.get('/', function(req, res, next) {

  var fileStream = fs.createReadStream(fileName);
  fileStream.pipe(res);
  
});

module.exports = router;
