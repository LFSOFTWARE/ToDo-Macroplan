import React, { useContext, useState } from "react";
import { TarefaContext } from "../../providers/Tarefa";
import api from "../../service/api";
import { Feed, Icon } from "../../style/style";
import { Container } from "../../style/style";
const Usuarios = () => {
    const { usuarios ,setReflash} = useContext(TarefaContext)

    const [novoUser,setNovoUser] = useState(null) 


    const createUsuario =  async ()=>{
        try {
            const response = await api.post("/usuario",{
                nome:novoUser
            })

            const res = response.data
            if(res.error){
                alert(res.message)
                return false
            }

            setReflash(true)

        } catch (error) {
            alert(error.message)
        }

    }
    const deleteUsuario = async (id)=>{
        try {
            const response = await api.delete("/usuario/"+id)
            const res = response.data

            if(res.error){
                alert(res.message)
                return false
            }

            setReflash(true)
        } catch (error) {
            alert(error.message)
        }
    }
    return (
        <Feed className="container ">
            <br />
            <div className="container">
                <h4>
                    Usuarios
                </h4>
                <div class="d-grid gap-2 col-6 mx-auto">
                    <button class="btn btn-primary" type="button" data-bs-toggle="modal" data-bs-target="#modalAdicionar">Criar usuário</button>
                </div>

            </div>
            <div class="accordion accordion-flush mt-5 boxTarefas" id="accordionFlushExample">
                {

                    // Renderiza os usuarios
                    usuarios?.map((usuario, index) => (

                        <div class="accordion-item">

                            <h2 class="accordion-header" id={"flush-heading" + index}>
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={"#flush-collapseOne" + index} aria-expanded="false" aria-controls={"flush-collapseOne" + index}>
                                    {usuario.user.nome}
                                </button>
                            </h2>
                            <div id={"flush-collapseOne" + index} class="accordion-collapse collapse" aria-labelledby={"flush-heading" + index} data-bs-parent="#accordionFlushExample">
                                <div className="formUser mt-3 mb-2">
                                    <button type="button" class="btn btn-danger  btn-sm" onClick={()=>deleteUsuario(usuario.user._id)}>Deletar usuário </button>

                                </div>

                                {usuario.tarefas.length  > 0 &&
                                
                                <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Tarefa</th>
                                        <th scope="col">Estado</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {/* Renderiza as tarefas dos usuarios */}


                                    {usuario.tarefas.map((tarefa,index) => (
                                        <tr>
                                            <th scope="row">{index+1}</th>
                                            <td>{tarefa.descricao}</td>
                                            <td>
                                                {tarefa.estado == 'F' &&
                                                    <Icon className="fa fa-check-circle" color="green" aria-hidden="true"></Icon>

                                                }

                                                {tarefa.estado == 'P' &&
                                                    <Icon className="fa fa-spinner" aria-hidden="true"></Icon>

                                                }
                                            </td>
                                        </tr>
                                    ))}

                                </tbody>
                            </table>
                                
                                }
                               
                            </div>
                        </div>
                    ))
                }


            </div>
            <div className="modal fade" id="modalAdicionar" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Adicionar usuário</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="container">
                                <label for="descricao" className="form-label">Nome</label>
                                <input type="email" className="form-control" onChange={(e)=>setNovoUser(e.target.value)} id="descricao" aria-describedby="emailHelp" />


                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                            <button type="button" className="btn btn-primary" onClick={()=>createUsuario()} >Adicionar</button>
                        </div>
                    </div>
                </div>
            </div>
        </Feed>

    )
}


export default Usuarios