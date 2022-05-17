
const express = require("express")
const app = express();
const router = express.Router();

const TarefaController = require("../controllers/TarefaController")
const UsuarioController = require("../controllers/UsuarioController")

//Usuario
router.get("/usuario",UsuarioController.getAllUsuario)
router.post("/usuario",UsuarioController.CreateUsuario)
router.delete("/usuario",UsuarioController.DeleteUsuario)

//Tarefa 
router.get("/tarefa",TarefaController.getAllTarefas)
router.post("/tarefa",TarefaController.newTarefa)
router.delete("/tarefa",TarefaController.deleteTarefa)
router.put("/tarefa",TarefaController.updateTarefa)


module.exports = router