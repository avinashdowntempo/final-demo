var conne=require('../../connections/dbconnection');
var Schema=conne.con2.Schema;
var accountSchema=new Schema({
	id: {type:Number,required:true},
	name: {type: String, required: true},
	subaccounts:
   [{   data: [{type:Number,required:true}],
        labels: [{type: String, required: true}],
        show:  {type: Boolean, required: true},
        accname: {type: String, required: true},
        acctype: {type: String, required: true},
        mrkvalue: {type:Number,required:true} }]
});
module.exports= conne.con2.model('newaccounts',accountSchema);