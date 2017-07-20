const mongoose = require('mongoose')
mongoose.Promise = global.Promise
module.exports = mongoose.connect('mongodb://localhost/billingcycles')

mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório."
mongoose.Error.messages.Number.min = 
    "O '{VALUE}' informado é menor que o limite mínimo de '{MIN}'."
mongoose.Error.messages.Number.max = 
    "O '{VALUE}' informado é maio que o limite mínimo de '{MAX}'."
mongoose.Error.messages.String.enum = 
    "O '{VALUE}' não é válido para o atributo '{PATH}'."