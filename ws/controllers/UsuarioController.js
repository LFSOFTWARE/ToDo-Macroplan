const Tarefa = require("../models/Tarefa");
const Usuario = require("../models/Usuario")

class UsuarioController {
    // Tela para listar os usuários.
    // Tela para criar um usuário.
    // Tela para excluir um usuário. 


    async getAllUsuario(req, res) {
        try {

            await Usuario.find().then(async(result) => {
                var finalUsers = []

               for(let user of result){
                  var tarefas = await  Tarefa.find({userId:user._id})

                 var userTarefa  = {
                      user:user,
                      tarefas
                  }

                  finalUsers.push(userTarefa)
               }


                res.status(200)
                res.json({ error: false, message: "OK" ,usuarios:finalUsers})
            }).catch((err) => {
                res.status(400)
                res.json({ error: true, message: err.message })
            });



        } catch (error) {
            res.status(400)
            res.json({ error: true, message: err.message })
        }
    }

    async CreateUsuario(req, res) {

        try {
            const { nome } = req.body

            await new Usuario({
                nome
            }).save()

            res.status(200)
            res.json({ error: false, message: "OK" })

        } catch (error) {

            res.status(400)
            res.json({ error: true, message: err.message })

        }
    }


    async DeleteUsuario(req, res) {
        try {
            const { idUser } = req.params 

            await Usuario.deleteOne({ _id: idUser }).then((result) => {
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



module.exports = new UsuarioController()
