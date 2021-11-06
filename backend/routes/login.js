const express = require("express");
const path = require("path")
const client = require("../config");
const router = express.Router();
const Joi = require('joi')
const { generateToken } = require("../util/genToken")

const loginSchema = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required()
})

router.post('/login', async (req, res, next) => {
    try {
        await loginSchema.validateAsync(req.body, { abortEarly: false })
    } catch (err) {
        return res.status(400).send(err)
    }
    let username = req.body.username
    let password = req.body.password

    await client.connect()
    const session = client.startSession();

    const transactionOptions = {
        readPreference: 'primary',
        readConcern: { level: 'local' },
        writeConcern: { w: 'majority' }
    };

    try {
        await session.withTransaction(async () => {
            let aaa = await client.db('user').collection('account').findOne({username: username, password: password}, {session})
            if(aaa.username === username && aaa.password === password){
                let token = await client.db('user').collection('token').findOne({id: aaa.id}, {session})
                if(token === null){
                    token = generateToken()
                    await client.db('user').collection('token').insertMany([
                        {
                            id: aaa.id,
                            token: token
                        }
                    ])
                    console.log("add token!")
                }
                res.status(200).send(token.token)
            }
            res.send("ok")
        }, transactionOptions)
    } catch (error) {
        console.log(error)
    } finally {
        await session.endSession();
    }
})

exports.router = router;