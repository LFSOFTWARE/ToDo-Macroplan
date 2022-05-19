const mongoose = require("mongoose")


const Schema = mongoose.Schema


const Tarefa = new Schema({
   
    descricao: {
        type: String,
        required: true
    },
    estado:{
        type: String,

        enum: ['F','P','E'], // FEITO,PENDENTE,EM Execução
        default:'P'
    },
    userId:{
        type:Schema.Types.ObjectId,
        ref:'Usuario',
        required: true

    },
    dataCadastro: {
        type: Date,
        default: Date.now()
    }
})


module.exports = mongoose.model('Tarefa',Tarefa)