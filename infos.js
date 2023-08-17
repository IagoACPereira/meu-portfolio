const fs = require("fs")

const pathProjetos = './database/projetos.json'
const projetos = JSON.parse(fs.readFileSync(pathProjetos, "utf8"))

const infos = {
  titulo: 'Meu Portifólio',
  nome: 'Iago Azevedo Costa Pereira',
  desc: 'Encontrei no desenvolvimento de software um hobbie incrível que a cada pequena solução é uma grande conquista, faz eu sentir uma grande satisfação, um sentimento de grande vitória 🤘😍.',
  projetos: projetos,
  contatos: {
    cel: '+55 11 9 8067-5993',
    email: 'iago.acpereira@gmail.com',
    linkedIn: 'https://www.linkedin.com/in/iagoacpereira',
    gitHub: 'https://github.com/IagoACPereira'
  }
}

module.exports = infos