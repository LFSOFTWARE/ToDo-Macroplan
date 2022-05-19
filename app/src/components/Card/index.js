import React, { useContext, useEffect, useState } from "react";
import { TarefaContext } from "../../providers/Tarefa";
import api from "../../service/api";
import { Card, Box, Container, Icon } from "../../style/style";

import '../../style/style.css'
const Tarefa = () => {
    const { tarefas, setReflash } = useContext(TarefaContext)



    const Corpo = ({ data }) => {
        const [decoretor, setDecoretor] = useState(false)
        const [idTarefa] = useState(data._id)

        //Deleta Tarefa 
        const deletarTarefa = async () => {
            try {
                const response = await api.delete(`/tarefa/${idTarefa}`)

                const res = response.data

                if (res.error) {
                    alert(res.message)
                    return false
                }
                setReflash(true)


            } catch (error) {
                alert(error.message)
            }
        }

        //Atribui um label para o estado
        const estado = (estado) => {
            switch (estado) {
                case 'P':
                    return 'Pendente'
                    break;

                case 'F':
                    return 'Finalizado'
                    break;

                case 'E':
                    return 'Em execução '
                    break;

                default:
                    break;
            }

        }

        const updateEstado = async (id, estado) => {
            try {
                const response = await api.put('/tarefa', {
                    _id: id,
                    estado
                })

                const res = response.data

                if (res.error) {
                    alert(res.message)
                    return false
                }
                setReflash(true)



            } catch (error) {
                alert(error.message)
            }
        }

        return (

            <Card className="cardHover" >
                <div className="desc" 
                onClick={() => {
                    setDecoretor(!decoretor)
                }}
                >

                    <p className={
                        decoretor == true ? 'feito': data.estado == 'F' ? 'feito':'pendente'
                    } >
                    
                    

                   
                        {data.descricao}
                    </p>
                </div>

                <Box >
                    <select
                        class="form-select selec"
                        onChange={(e) => updateEstado(data._id, e.target.value)}
                        aria-label="Selecione estado"
                    >
                        <option value={data.estado} selected>{estado(data.estado)}</option>
                        {data.estado == 'P' && (
                            <>
                                <option value="E">Em execução</option>
                                <option value="F">Finalizado</option></>
                        )
                        }

                        {data.estado == 'F' && (
                            <>
                                <option value="E">Em execução</option>
                                <option value="P">Pendente</option></>
                        )
                        }

                        {data.estado == 'E' && (
                            <>
                                <option value="F">Finalizado</option>
                                <option value="P">Pendente</option></>
                        )
                        }


                    </select>

                    <Icon 
                    className="fa fa-trash" 
                    color="red" 
                    onClick={() => deletarTarefa()} 
                    aria-hidden="true" />

                </Box>

            </Card>
        )


    }



    return (
        <>
            <div className="boxTarefas">
                {tarefas?.map((tarefa) => (
                    <Corpo data={tarefa} />
                ))


                }
            </div>



        </>

    )
}


export default Tarefa