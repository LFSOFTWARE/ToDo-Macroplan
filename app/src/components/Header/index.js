import React from "react";
import {Header} from '../../style/style'

const HeaderC = ()=>{
    return(
        <Header>
            <div className="box">
            <h1 >Tarefas</h1>

            </div>
            <div >
            <button type="button" class="btn btn-success">Adicionar</button>

            </div>


        </Header>
    )
}

export default HeaderC