const express = require('express');
const router = express.Router();
const cookie = require('cookie');
const { raw } = require('body-parser');

// additional imports
const db = require("../lib/mysql");
const bcrypt = require('bcrypt');
const saltRounds = 10;

router.post('/login', function(req, res, next) {
    const loginData = req.body;
    db.query('SELECT * FROM users WHERE userId = ?', [ loginData.id ], function(err, user) {
        if (user){
            bcrypt.compare(loginData.pw, user[0].userPw , function(err, result) {
                if (result){
                    // create isLogged property on session
                    req.session.isLogged = true;
                    res.send('로그인 성공!')
                } else {
                    // 비번 일치 X
                    res.send('비번 틀림')
                }
            })
        }
        else {
            res.send('아이디 존재 안함')
        }

    })


    res.cookie('userId', loginData.id, {
        httpOnly:true
   });
    res.redirect('http://localhost:3006/home/')
});


router.post('/register',function(req,res,next){
    const loginData = req.body;
    // 중복체크 구현해야함.
    res.send('회원가입 완료^^')

})







router.get('/test',function(req,res){
    // var cookies = cookie.parse(req.headers.cookie || '');
    // res.send(cookies);
    if (req.session.num === undefined){
        req.session.num = 1;
    } else {
        req.session.num = req.session.num +1 ;
    }
    res.send(`방문횟수 : ${req.session.num}`)
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
