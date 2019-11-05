var mongoose=require('mongoose');
var Schema=mongoose.Schema;


var CategorySchema=new Schema({
  
    name:{type:Schema.Types.String,required:true,unique:true},
    createdOn:{type:Schema.Types.Date,required:true},
    description:{type:Schema.Types.String,required:true},
    subcategories: [{ type: Schema.Types.ObjectId, ref: 'SubCategory' }]
})


module.exports=mongoose.model('Category',CategorySchema);