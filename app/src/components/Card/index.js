import React, { useContext, useEffect, useState } from "react";
import { TarefaContext } from "../../providers/Tarefa";
import { Card, Box } from "../../style/style";

import '../../style/style.css'
const Tarefa = () => {
    const { tarefas } = useContext(TarefaContext)

    const Descricao = ({ data }) => {
        const [teste, setTest] = useState(false)

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
                    <button type="button" class="btn btn-secondary">Editar</button>
                    <button type="button" class="btn btn-danger">Excluir</button>

                </Box>
            </Card>
        )


    }



    return (
        <>
            {tarefas.map((tarefa) => (
                <Descricao data={tarefa} />
            ))


            }

        </>

    )
}


export default Tarefa