// var express = require('express');
// var router = express.Router();

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

// module.exports = router;


var express = require('express');
var fs = require('fs');
var path = require('path');
var router = express.Router();


var fileName = path.join(process.cwd(), 'public/views/user.html');

/* GET home page. */
router.get('/', function(req, res, next) {

  var fileStream = fs.createReadStream(fileName);
  fileStream.pipe(res);
  
});

module.exports = router;
