import React, { useContext, useState } from "react";
import { TarefaContext } from "../../providers/Tarefa";
import api from "../../service/api";
import { Header, Icon } from '../../style/style'

const HeaderC = () => {
    const { usuarios, setTarefas, tarefas, setReflash } = useContext(TarefaContext)


    const [novaTarefa, setNovaTarefa] = useState({
        descricao: '',
        userId: ''
    })


    const createTarefa = async () => {
        try {
            const response = await api.post('/tarefa', {
                descricao: novaTarefa.descricao,
                userId: novaTarefa.userId
            })
            var array = tarefas
            array.push(novaTarefa)
            setTarefas(array)
            setReflash(true)

        } catch (error) {
            alert(error.message)
        }
    }

    return (
        <Header className="container">

            <br />
            <div className="container mt-4">
                <h4>
                    Suas Tarefas     <Icon 
                     className="fa fa-book"
                      aria-hidden="true"
                   
                   />
                </h4>
                <div class="d-grid gap-2 col-6 mx-auto mb-5">
                    <button class="btn btn-primary" type="button" data-bs-toggle="modal" data-bs-target="#modalAdicionar">Criar tarefa</button>
                </div>

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
                                <input onChange={e => setNovaTarefa({ ...novaTarefa, descricao: e.target.value })} type="email" className="form-control" id="descricao" aria-describedby="emailHelp" />

                                <label for="usuario" className="form-label mt-4">Usuário</label>
                                <select onChange={(e) => setNovaTarefa({ ...novaTarefa, userId: e.target.value })} className="form-select" aria-label="Usuario" id="usuario">
                                    <option selected>Selecione um usuário para a tarefa</option>
                                    {
                                        usuarios?.map((usuario, index) => (
                                            <option key={index} value={usuario.user._id}>{usuario.user.nome}</option>

                                        ))

                                    }
                                </select>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                            <button type="button" className="btn btn-primary" onClick={() => { createTarefa() }}>Adicionar</button>
                        </div>
                    </div>
                </div>
            </div>
        </Header>
    )
}

export default HeaderC