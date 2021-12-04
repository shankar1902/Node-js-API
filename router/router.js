const express=require('express');
const router=express.Router();
const DeveloperRouter = require("../developer/developer-schema")


//Create
router.post('/api/',async(req,res)=>{
    
    var data=new DeveloperRouter({
        Name:req.body.Name,
        Role: req.body.Role
    })
    await data.save();
    res.json(data);
    })

    //Update
router.put('/api/',async(req,res)=>{
    var update=await DeveloperRouter.update({_id:req.body._id},{$set:{
            Name:req.body.Name,
        Role: req.body.Role
        }});
    res.json(update);
    })

     //Delete
router.delete('/api/delete/:id',async(req,res)=>{
   
    var deleteData=await DeveloperRouter.findByIdAndRemove(req.params.id).then(e=>{
        res.json({message:"Deleted Successfully"});
    })
    
    })

//ListAll
router.get('/api/list',async(req,res)=>{
    var findData=await DeveloperRouter.find();
    console.log(findData)
    res.json(findData);
    })
//List
router.get('/',(req,res)=>{
res.json("hello boy")
})

module.exports = router