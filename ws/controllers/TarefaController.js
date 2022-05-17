const Tarefa = require("../models/Tarefa")

class TarefaController {

    // Tela para lista suas tarefas.
    // Tela para criar uma nova tarefa.
    // Tela para excluir uma tarefa.
    // Tela para alterar o estado da tarefa (Pendente, Em Execução, Finalizada). 

    async getAllTarefas(req, res) {
        await Tarefa.find().then((result) => {
            res.status(200)
            res.json({ error: false, message: 'OK', tarefas: result })
        }).catch((err) => {
            res.status(400)

            res.json({ error: true, message: err.message })
        });
    }

    async newTarefa(req, res) {
        try {
            const { descricao, userId } = req.body;

            await new Tarefa({
                descricao,
                userId
            }).save()


            res.status(200)
            res.json({ error: false, message: 'OK' })

        } catch (error) {
            res.status(400)

            res.json({ error: true, message: error.message })
        }



    }

    async deleteTarefa(req, res) {
        try {
            const { idTarefa } = req.body

            await Tarefa.deleteOne({ _id: idTarefa }).then((result) => {
                res.status(200)
                res.json({ error: false, message: 'OK' })
            }).catch((err) => {
                res.status(400)

                res.json({ error: true, message: err.message })
            });



        } catch (error) {
            res.status(400)

            res.json({ error: true, message: error.message })
        }

    }


    async updateTarefa(req, res) {
        try {
            const { estado, _id } = req.body

            await Tarefa.findByIdAndUpdate(_id,{estado}).then((result) => {
                res.status(200)
                res.json({ error: false, message: 'OK' })
            }).catch((err) => {
                res.status(400)

                res.json({ error: true, message: err.message })
            });
        } catch (error) {
            res.status(400)

            res.json({ error: true, message: error.message })
        }

    }


}


module.exports = new TarefaController();