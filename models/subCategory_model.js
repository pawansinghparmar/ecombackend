var mongoose=require('mongoose');
var Schema=mongoose.Schema;


var SubCategorySchema=new Schema({
    categoryid:{type:Schema.Types.ObjectId,ref:'Category'},
    name:{type:Schema.Types.String,required:true,unique:true},
    createdOn:{type:Schema.Types.Date,required:true},
    description:{type:Schema.Types.String,required:true}
})

module.exports=mongoose.model('SubCategory',SubCategorySchema);