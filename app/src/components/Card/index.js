import React, { useContext, useEffect, useState } from "react";
import { TarefaContext } from "../../providers/Tarefa";
import api from "../../service/api";
import { Card, Box, Container } from "../../style/style";

import '../../style/style.css'
const Tarefa = () => {
    const { tarefas,setReflash } = useContext(TarefaContext)



    const Descricao = ({ data }) => {
        const [teste, setTest] = useState(false)
        const [idTarefa] = useState(data._id)

        const deletarTarefa = async ()=>{
            try {
              
                const response =  await api.delete(`/tarefa/${idTarefa}`)
                setReflash(true)

                const res = response.data
               
                if(res.error){
                    alert(res.message)
                    return false
                }
            } catch (error) {
                alert(error.message)
            }
        }

        
        return (

            <Card className="cardHover" >
                <div className="desc">
                    <p onClick={() => {
                        setTest(true)
                    }} className={teste == false ? 'pendente' : 'feito'}>
                        {data.descricao}
                    </p>
                </div>

                <Box >
                    <button type="button" className="btn btn-secondary">Editar</button>
                    <button type="button" className="btn btn-danger" onClick={()=>deletarTarefa()}>Excluir</button>

                </Box>

            </Card>
        )


    }



    return (
        <>
            <div className="boxTarefas">
                {tarefas?.map((tarefa) => (
                    <Descricao data={tarefa} />
                ))


                }
            </div>



        </>

    )
}


export default Tarefa