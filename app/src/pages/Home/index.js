import React from "react";
import { Container, Menu, Imagem } from "../../style/style";
import '../../style/style.css'
import Tarefas from "../Tarefas";
import Usuarios from "../Usuarios";
const Home = () => {




    return (
        <Container >
            <Menu>
                <div>
                    <Imagem src="https://img.freepik.com/vetores-gratis/perfil-de-avatar-de-homem-no-icone-redondo_24640-14044.jpg" alt="Minha Figura" />
                    <h3>LUIZ FERNANDO</h3>
                </div>
                <div>
                    <h4>Usuarios</h4>
                    <h4>Tarefas</h4>
                </div>
            </Menu>
            <Usuarios />
        </Container >
    )
}

export default Home