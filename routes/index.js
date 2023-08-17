const express = require('express')
const fs = require("fs")
const Controlador = require('../controllers/index.js')

const pathProjetos = './database/projetos.json'
const projetos = JSON.parse(fs.readFileSync(pathProjetos, "utf8"))

const router = express.Router()

router.get("/", Controlador.minhasInformacoes)

router.post("/inserir/projeto", (req, res) => {
  const { titulo, repositorio } = req.body
  const dados = {
    titulo,
    repositorio
  }

  projetos.push(dados)
  salvarDadosEmJson(pathProjetos, projetos)

  res.status(200).json({
    mensagem: 'Dados incluídos com sucesso!',
    projetos, 
  })
})


router.put('/editar/projeto/repositorio/:titulo', (req, res) => {
  const { titulo } = req.params
  console.log()
  res.status(200).send('Rota ainda em desenvolvimento!')
})

router.delete('/deletar/projeto/:titulo', (req, res) => {
  const { titulo } = req.params
  console.log()
  res.status(200).send('Rota ainda em desenvolvimento!')
})

function salvarDadosEmJson(path, dados) {
  fs.writeFileSync(path, JSON.stringify(dados), 'utf8')
}

module.exports = router