import React, { useContext, useState, useEffect } from "react";
import api from "../service/api";

export const TarefaContext = React.createContext({})


export const TarefaProvider = (props) => {
    const [tarefas, setTarefas] = useState([])
    const [usuarios, setUsuarios] = useState([])

    const getTarefas = async () => {
        const response = await api.get('/tarefa')
        const res = response.data

        if (res.error) {
            alert(res.message)
            return false
        }

        setTarefas(res.tarefas)
    }

    const getUsuarios = async () => {
        const response = await api.get('/usuario')
        const res = response.data

        if (res.error) {
            alert(res.message)
            return false

        }
       
        setUsuarios(res.usuarios)
    }




    useEffect(() => {
        getTarefas()
        getUsuarios()
    }, [])
    return (
        <TarefaContext.Provider value={{ tarefas,usuarios }} >

            {props.children}
        </TarefaContext.Provider>
    )
}