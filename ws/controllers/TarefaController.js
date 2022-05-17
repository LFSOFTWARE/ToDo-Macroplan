const Tarefa = require("../models/Tarefa")

class TarefaController {

    // Tela para lista suas tarefas.
    // Tela para criar uma nova tarefa.
    // Tela para excluir uma tarefa.
    // Tela para alterar o estado da tarefa (Pendente, Em Execução, Finalizada). 

    async getAllTarefas(req, res) {

    }

    async newTarefa(req, res) {
        try {
            const { descricao, userId } = req.body;

            await new Tarefa({
                descricao,
                userId
            })


            res.status(200)
            res.json({ error: false, message: 'OK' })

        } catch (error) {
            res.status(400)

            res.json({ error: true, message: error.message })
        }



    }

    async deleteTarefa(req, res) {

    }


    async updateTarefa(req, res) {

    }


}


module.exports = new TarefaController();