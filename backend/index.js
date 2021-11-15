const express = require("express")
var cors = require('cors')
const path = require("path")
const app = express();
app.use(cors())

app.use(express.static('static'))
app.use(express.json()) 
app.use(express.urlencoded({ extended: true })) 

const regisRouter = require('./routes/regis')
const loginRouter = require('./routes/login')
const scoreRouter = require('./routes/score')

app.use(regisRouter.router)
app.use(loginRouter.router)
app.use(scoreRouter.router)

app.listen(3000, () => {
    console.log(`Example app listening at http://localhost:3000`)
})