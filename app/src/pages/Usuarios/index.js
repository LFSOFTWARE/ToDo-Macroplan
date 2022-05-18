import React, { useContext } from "react";
import { TarefaContext } from "../../providers/Tarefa";
import { Feed, Icon } from "../../style/style";
import { Container } from "../../style/style";
const Usuarios = () => {
    const { usuarios } = useContext(TarefaContext)

    
    return (
        <Feed className="container ">
            <br/>
           <div>
               <h4>
                   Usuarios
               </h4>
           </div>

            <div class="accordion accordion-flush" id="accordionFlushExample">
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

        </Feed>

    )
}


export default Usuarios