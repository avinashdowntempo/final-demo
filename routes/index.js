var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/gotomainapplication', function(req, res, next){
res.render(path.join(__dirname+'/../dist/index.html'));
});
router.get('/signin', function(req, res, next){
res.render(path.join(__dirname+'/../dist/signin.html'));
});

router.get('/',function (req, res) {
        res.redirect('/signup');
    });
module.exports = router;
