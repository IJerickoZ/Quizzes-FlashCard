const express = require("express");
const path = require("path")
const client = require("../config");
const router = express.Router();
const Joi = require('joi')

router.post("/setcard", async(req, res, next)=>{
    let result = req.body;
    await client.connect()
    const session = client.startSession();
    try{
        client.db("user").collection("SetCard").insertOne(
            {
                cardname: req.body.cardname,
                cardSetNum: req.body.cardSetNum,
                cardOpen: req.body.cardOpen,
                cardList:[]
              }
        )
        res.send("SetCards Complete")
        console.log(req.body)
        
    }catch (error){
        console.log(error)
    }
})

router.get("/getcardItem", async(req,res,next)=>{
    let result;
    let num = parseInt(req.query.search)
    await client.connect()
    const session = client.startSession();
    try{
        result = await client.db("user").collection("SetCard").findOne({cardSetNum : num});
        res.send(result)
    }catch(error){
        console.log(error)
    }
    console.log(result);
    console.log(req.query.search)
})
router.get("/getcardItemAll", async(req,res,next)=>{
    let result;
    await client.connect()
    const session = client.startSession();
    try{
        result = await client.db("user").collection("SetCard").find({}).toArray()
        res.send(result)
    }catch(error){
        console.log(error)
    }
    console.log(result);
    console.log(req.query.search)
})

router.delete("/deletecard/:id", async(req, res, next)=>{
    await client.connect()
    let result = parseInt(req.params.id);
    const session = client.startSession();
    try{
        client.db("user").collection("SetCard").deleteOne({cardSetNum: result})
    }catch(error){
        console.log(error)
    }
    res.send("Delete Complete");
})

router.put("/updatecard", async(req, res, next)=>{
    await client.connect()
    const session = client.startSession();
    let num = parseInt(req.body.in);
    try{
        client.db("user").collection("SetCard").updateOne({cardSetNum: num}, {$push:{cardList:req.body}})
    }catch(error){
        console.log(error)
    }
    res.send("Update Complete")
})

router.get("/getwordfromset", async(req, res, next)=>{
    await client.connect()
    const session = client.startSession();
    let num = parseInt(req.query.search)
    let result;
    try{
        result = await client.db("user").collection("SetCard").findOne({cardSetNum:num})
        res.send(result.cardList);
    }catch(error){
        console.log(error)
    }
})

exports.router = router;