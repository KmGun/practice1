const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

router.get('/bgImg',function(req,res){
    const filelist = fs.readdirSync('./data/bgImg');
    const randomNo = Math.floor(Math.random()*(filelist.length-1))+1;
    res.sendFile(path.resolve(`${__dirname}/../data/bgImg/${randomNo}.jpg`));
})


module.exports = router;
