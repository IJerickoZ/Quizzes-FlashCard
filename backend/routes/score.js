const express = require("express");
const path = require("path")
const client = require("../config");
const router = express.Router();
const Joi = require('joi')


const scoreSchema = Joi.object({
    token: Joi.string().required()
})

router.put('/score', async (req, res, next) => {
    try {
        await scoreSchema.validateAsync(req.body, { abortEarly: false })
    } catch (err) {
        return res.status(400).send(err)
    }

    let token = req.body.token;

    await client.connect()
    const session = client.startSession();

    const transactionOptions = {
        readPreference: 'primary',
        readConcern: { level: 'local' },
        writeConcern: { w: 'majority' }
    };

    try {
        await session.withTransaction(async () => {
            await client.db('user').collection('token').findOne({token : token}, {explicit: true})
            .then(async function(user) {
                if(user.token === token){
                    await client.db('user').collection('account').findOneAndUpdate({"id" : user.id}, { $inc: { "score" : 1 }})
                }
                let updated_score = await client.db('user').collection('account').findOne({"id" : user.id})
                res.status(200).send({score : updated_score.score})
            }).catch(function(err) {
                return res.status(400).send(err)
            })

            
        }, transactionOptions)
    } catch (error) {
        console.log(error)
    } finally {
        await session.endSession();
    }



})
exports.router = router;