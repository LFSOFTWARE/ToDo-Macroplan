import React from "react";
import HeaderC from "../../components/Header";
import Tarefa from "../../components/Card";
import {  Feed } from "../../style/style";


const Tarefas = ()=>{
    return(
        <Feed className="container ">
            <HeaderC />
            <br />
            <Tarefa />

        </Feed>
    )
}

export default Tarefas