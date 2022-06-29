var express = require('express');
var router = express.Router();


router.post('/', function(req, res, next) {
    const logInData = req.body;
    res.writeHead(200, { 'Set-Cookie': ['type=ninja', 'language=javascript'] })
});

module.exports = router;
