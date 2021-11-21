const express = require("express");
const path = require("path")
const client = require("../config");
const router = express.Router();
const Joi = require('joi');
const { Session } = require("inspector");
const bcrypt = require('bcrypt')
const regisSchema = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required()
})

router.post("/regis", async function(req, res, next) {
    try {
        await regisSchema.validateAsync(req.body, { abortEarly: false })
    } catch (err) {
        return res.status(400).send("Please complete the information.")
    }

    let username = req.body.username
    let password = await bcrypt.hash(req.body.password, 5)

    await client.connect()
    const session = client.startSession();
 
    const transactionOptions = {
        readPreference: 'primary',
        readConcern: { level: 'local' },
        writeConcern: { w: 'majority' }
    };

    try {
        await session.withTransaction(async () => {
            let aaa = await client.db('user').collection('account').findOne({username: username}, {session})
            if(aaa !== null){
                res.send("This username has already been used.")
            } else {
                const number = await client.db('user').collection('account').find().count()
                await client.db('user').collection('account').insertMany([
                    {
                        username:username,
                        password:password,
                        id: number + 1,
                        score: 0
                    }
                ])
                res.send("Success!")
            }
        }, transactionOptions)
    } catch (error) {
        console.log(error)
    } finally {
        await session.endSession();
    }
    // await client.connect()
    // let aaa = await client.db('user').collection('account').findOne({username: username})
    // if(aaa !== null){
    //     res.send("This username has already been used.")
    // } else {
    //     await client.db('user').collection('account').insertMany([
    //         {
    //             username:username,
    //             password:password
    //         }
    //     ])
    //     res.send("Success!")
    // }
    // client.close()
})

exports.router = router;