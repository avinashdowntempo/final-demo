var express = require('express');
var router = express.Router();
var path = require('path');
var Account= require('../models/universis-model/newaccounts');
var Advisor= require('../models/universis-model/advisor');
router.get('/universis/accounts', function(req, res, next){
Account.find(function(err, docs){
	console.log(docs);
res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(docs));
})
});
router.get('/universis/advisor', function(req, res, next){
Advisor.find(function(err, docs){
	console.log(docs);
res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(docs));
})
});

module.exports = router;