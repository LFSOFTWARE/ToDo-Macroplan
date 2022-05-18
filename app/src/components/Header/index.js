import React, { useContext } from "react";
import { TarefaContext } from "../../providers/Tarefa";
import { Header } from '../../style/style'

const HeaderC = () => {
    const { usuarios } = useContext(TarefaContext)

    return (
        <Header>
            <div className="box">
                <h1 >Tarefas</h1>

            </div>
            <div >
                <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#modalAdicionar">Adicionar</button>

            </div>

            <div class="modal fade" id="modalAdicionar" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Adicionar Tarefa</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div className="container">
                                <label for="descricao" className="form-label">Descrição</label>
                                <input type="email" className="form-control" id="descricao" aria-describedby="emailHelp" />

                                <label for="usuario" className="form-label mt-4">Usuário</label>
                                <select class="form-select" aria-label="Usuario" id="usuario">
                                    <option selected>Selecione um usuário para a tarefa</option>
                                    {
                                        usuarios?.map((usuario) => (
                                            <option  value={usuario._id}>{usuario.nome}</option>

                                        ))

                                    }
                                </select>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                            <button type="button" class="btn btn-primary">Adicionar</button>
                        </div>
                    </div>
                </div>
            </div>
        </Header>
    )
}

export default HeaderC