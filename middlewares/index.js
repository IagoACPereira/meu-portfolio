const err404 = (req, res, next) => {
  res.status(404).json({
    mensagem: 'Não encontrado!',
    status: 404
  }) 

  next()
}

module.exports = { err404 }