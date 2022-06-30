var express = require('express');
var router = express.Router();
var cookie = require('cookie');
// var db = require("../lib/mysql");


router.post('/', function(req, res, next) {
    const logInData = req.body;
    let isLogined = false;


    




    res.cookie('userId', logInData.id, {
        httpOnly:true
   });
    res.redirect('http://localhost:5500/client/')
});

router.get('/test',function(req,res){
    var cookies = cookie.parse(req.headers.cookie || '');
    res.send(cookies)
})

router.get('/test1',function(req,res){
    res.cookie('path1', 'path1cookie', {
        path : '/path1'
    });

    res.redirect('http://localhost:5500/client/')
})

router.get('/test2',function(req,res){
    res.cookie('path2', 'path2cookie', {

    });

    res.redirect('http://localhost:5500/client/')
})


module.exports = router;
