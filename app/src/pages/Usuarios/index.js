import React, { useContext } from "react";
import { TarefaContext } from "../../providers/Tarefa";
import { Feed, Icon } from "../../style/style";
import { Container } from "../../style/style";
const Usuarios = () => {
    const { usuarios } = useContext(TarefaContext)


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
            <div class="accordion accordion-flush mt-5" id="accordionFlushExample">
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
                            <button type="button" class="btn btn-danger  btn-sm">Deletar usuário </button>

                                </div>
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


                                        {usuario.tarefas.map((tarefa) => (
                                            <tr>
                                                <th scope="row">1</th>
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
                            </div>
                        </div>
                    ))
                }


            </div>
            <div className="modal fade" id="modalAdicionar" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Adicionar Tarefa</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="container">
                                <label for="descricao" className="form-label">Descrição</label>
                                <input type="email" className="form-control" id="descricao" aria-describedby="emailHelp" />

                                <label for="usuario" className="form-label mt-4">Usuário</label>
                                <select  className="form-select" aria-label="Usuario" id="usuario">
                                    <option selected>Selecione um usuário para a tarefa</option>
                                 
                                </select>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                            <button type="button" className="btn btn-primary" >Adicionar</button>
                        </div>
                    </div>
                </div>
            </div>
        </Feed>

    )
}


export default Usuarios