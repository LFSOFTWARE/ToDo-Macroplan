import React from "react";


export const TarefaContext = React.createContext({})


export const TarefaProvider = (props)=>{
    const tarefas = [
        {
            descricao:"Desenvolver o tema",
            estado:"P",
            idUser:140
        },
        {
            descricao:"Lavar o carro",
            estado:"P",
            idUser:140
        },
    ]

    return (
        <TarefaContext.Provider value={{tarefas}} >

            {props.children}
        </TarefaContext.Provider>
    )
}