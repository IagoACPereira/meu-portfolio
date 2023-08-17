const express = require("express")
const minhasInfos = require("./infos.js")
const { err404 } = require('./middlewares/index.js')
const router = require('./routes/index.js')

const app = express()
const porta = 3000

app.use(express.json())
app.use(express.urlencoded({
  extended: true
}))
app.use(router)
app.use(err404)

app.listen(porta, () => console.log(`Servidor escutando porta ${porta}`))  