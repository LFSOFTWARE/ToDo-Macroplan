import React, { useContext } from "react";
import { Container, Menu, Imagem } from "../../style/style";
import '../../style/style.css'
import Usuarios from "../Usuarios";
import Tarefas from '../Tarefas'
import { TarefaContext } from "../../providers/Tarefa";
import Login from "../../components/Login";

const Home = () => {
    const { page,setPage,user } = useContext(TarefaContext)



    return (
        <Container >
            <Menu>
                <div>
                    <Imagem src="https://img.freepik.com/vetores-gratis/perfil-de-avatar-de-homem-no-icone-redondo_24640-14044.jpg" alt="Minha Figura" />
                    <h3>{user.nome}</h3>
                </div>
                <div>
                    <h4 onClick={()=> setPage('U')}>Usuarios</h4>
                    <h4 onClick={()=> setPage('H')}>Tarefas</h4>
                </div>
            </Menu>
            {page === 'U' &&
                <Usuarios />
            }

            {page === 'H' &&
                <Tarefas />
            }

            
        </Container >
    )
}

export default Home