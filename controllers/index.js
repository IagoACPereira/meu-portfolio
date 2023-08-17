const minhasInfos = require("../infos.js")

class Controladores {
  static minhasInformacoes = (req, res) => {
    res.status(200).json(minhasInfos) 
  }
}

module.exports = Controladores