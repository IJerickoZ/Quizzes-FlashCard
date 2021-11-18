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
                cardList:[{
                  word: req.body.cardList[0].word,
                  meaning:req.body.cardList[0].meaning
                }]
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

exports.router = router;