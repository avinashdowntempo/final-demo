var conne=require('../../connections/dbconnection');
var Schema=conne.con2.Schema;
var schemaa= new Schema({
  myadvisor: {type: String, required:true},
  address: {type: String, required:true},
  tel: {type: String, required:true},
  email: {type: String, required:true},
  display: {type: String, required:true}});
module.exports=conne.con2.model('advisor',schemaa);

