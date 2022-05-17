import React from "react";
import { Container, Feed, Menu} from "../../style/style";
import Tarefa from "../../components/Card";
const Home = () => {
    return (
        <Container >
           <Menu/>
           <Feed className="container ">
               <h1>Tarefas</h1>
                <Tarefa />
                <Tarefa />
                <Tarefa />
            </Feed>
        </Container >
    )
}

export default Home