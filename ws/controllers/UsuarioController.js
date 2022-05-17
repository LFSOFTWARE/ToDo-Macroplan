const Usuario = require("../models/Usuario")

class UsuarioController {
    // Tela para listar os usuários.
    // Tela para criar um usuário.
    // Tela para excluir um usuário. 


    async getAllUsuario(req, res) {

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

    }

}



module.exports = new UsuarioController()
