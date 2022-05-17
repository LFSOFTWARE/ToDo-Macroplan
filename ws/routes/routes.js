
const express = require("express")
const app = express();
const router = express.Router();

const TarefaController = require("../controllers/TarefaController")
const UsuarioController = require("../controllers/UsuarioController")

//Usuario

router.post("/usuario",UsuarioController.CreateUsuario)


module.exports = router