const model = require('../models/model')



// get categories


 
const createCategories=(req, res)=>{
const Create = new model.Categories({
  type:"Savings",
  color: "#1F3B5C", //dark
})
Create.save(function(err){
  if(err) return res.json(Create);
  return res.status(400).json({message: `Error whie creating categories ${err}`})
})
}

module.exports =  {createCategories};