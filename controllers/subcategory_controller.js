var SubCat=require('../models/subCategory_model');



exports.createSubcategory=function(req,res,next){
    var data=req.body;
   
var cat=new SubCat({

    categoryid:data.category,
    name:data.subcategory,
    createdOn:Date.now(),
    description:data.description
})

cat.save(function(err,result){
    if(result){
        res.send(result)
    }
})


}

exports.findallsubcategoryryryryr=function(req,res,next){
    SubCat.find().populate('getcategorydata').exec((function(err,result){
        if(result){
            res.send(result)
        }
    }))
}