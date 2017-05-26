//var mongoose=require('mongoose');
var conne=require('../../connections/dbconnection');
var Schema=conne.con2.Schema;
var bcrypt = require('bcrypt-nodejs');
var userSchema=new Schema({
Accountowner: {type: String, required: true},
Acctype: {type: String, required: true},
clientid: {type:Number,required:true},
accountdetails: [{Accno: {type: String, required: true},Name: {type: String, required: true},marketvalue: {type:Number,required:true}}]
});
module.exports= conne.con2.model('accounts',userSchema);


