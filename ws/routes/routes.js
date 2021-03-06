
const express = require("express")
const app = express();
const router = express.Router();

const TarefaController = require("../controllers/TarefaController")
const UsuarioController = require("../controllers/UsuarioController")

//Usuario
router.get("/usuario",UsuarioController.getAllUsuario)
router.post("/usuario",UsuarioController.CreateUsuario)
router.delete("/usuario/:idUser",UsuarioController.DeleteUsuario)

//Tarefa 
router.get("/tarefa/:idUser",TarefaController.getAllTarefas)
router.post("/tarefa",TarefaController.newTarefa)
router.delete("/tarefa/:idTarefa",TarefaController.deleteTarefa)
router.put("/tarefa",TarefaController.updateTarefa)


module.exports = router