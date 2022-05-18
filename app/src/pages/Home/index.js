import React from "react";
import { Container, Feed, Menu, Imagem } from "../../style/style";
import Tarefa from "../../components/Card";
import HeaderC from "../../components/Header";
import '../../style/style.css'

const Home = () => {
    return (
        <Container >
            <Menu>
                <div>
                    <Imagem src="https://img.freepik.com/vetores-gratis/perfil-de-avatar-de-homem-no-icone-redondo_24640-14044.jpg" alt="Minha Figura" />
                    <h3>LUIZ FERNANDO</h3>
                </div>
                <h4>Usuarios</h4>
                <h4>Tarefas</h4>
            </Menu>
            <Feed className="container ">
                <HeaderC />
                <br />
                <Tarefa />

            </Feed>
        </Container >
    )
}

export default Home