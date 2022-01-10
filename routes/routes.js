const express=require("express")
const router=express.Router()


const data=require('../model/data')
router.use(express.json())
router.get('/',async(req,res)=>{
   try{
       const value= await data.find()
       res.json(value)
   } 
   catch(error){
       res.send('error'+error)
   }
})

router.get("/:id",async(req,res)=>{
    const id=req.params.id
try{
const returnvalue=await data.findById(id)
res.json(returnvalue)

}
catch(error){
res.send("error"+error)
}
})

router.patch('/:id',async(req,res)=>{
try{
   const update=await data.findById(req.params.id)
   update.tech=req.body.tech
   const returnVaue=await update.save()
   res.json(returnVaue)
}
catch(err){
    res.send('error'+err)
}
})
router.post("/",async(req,res)=>{
    const value=new data({
        name:req.body.name,
        tech:req.body.tech,
        sub:req.body.sub  
      })
try{
  const returnVaue=await value.save()   // used to save data to database
  res.json(returnVaue)
}
catch(error){
res.send('error'+ error)
}
})

router.delete('/:id',async(req,res)=>{
    try{
       const update=await data.findById(req.params.id)
       
       const returnVaue=await update.remove()
       res.json(returnVaue)
    }
    catch(err){
        res.send('error'+err)
    }
    })

module.exports=router