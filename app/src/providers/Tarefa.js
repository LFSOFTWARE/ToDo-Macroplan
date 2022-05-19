import React, { useContext, useState, useEffect } from "react";
import api from "../service/api";

export const TarefaContext = React.createContext({})


export const TarefaProvider = (props) => {
    //Contexto das tarefas
    const [tarefas, setTarefas] = useState([])
    //Contexto doss usuarios
    const [usuarios, setUsuarios] = useState([])
    //atualiza os dados para o fronte
    const [reflash, setReflash] = useState(false)
    //Gerencia se vai apresentar a pagina home ou usuarios
    const [page, setPage] = useState('H') //H => home, u=> usuarios

    const [user, setUser] = useState({nome:'Gast',_id:''})

    //consome api para pegar as tarefas
    const getTarefas = async () => {
        try {
     
            const filtro = user._id === ''?'all':user._id
            const response = await api.get(`/tarefa/${filtro}`)
            const res = response.data

            if (res.error) {
                alert(res.message)
                return false
            }

            setTarefas(res.tarefas)
        } catch (error) {
            alert(error.message)
            return false
        }
    }

    //consome api para pegar os usuarios
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
        setReflash(false)
    }, [reflash])
    return (
        <TarefaContext.Provider value={{
              tarefas, 
              setTarefas,
              usuarios, 
              setReflash,
               page, 
               setPage, 
               user, 
               setUser 
               }} >

            {props.children}
        </TarefaContext.Provider>
    )
}