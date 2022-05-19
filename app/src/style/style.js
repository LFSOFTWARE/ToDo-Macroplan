import styled from 'styled-components'


export const Header = styled.header`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
`

export const Menu = styled.div`
    background:#4E97F5;
    width:25%;
    height:100vh;
    text-align: center;
    align-items: center;    
    padding:5% 0;
    display: flex;
    flex-direction: column;
    justify-content: space-around;


    @media only screen and (max-width: 728px) {
        width:100%;
    }

`

export const Feed = styled.div`
width: 100vw;
height: 100vh;
text-align: center;
flex-direction: row;

background:#FFFEFE;
border : 0.1px solid gray;



`


export const Container = styled.div`

width: 100vw;
height: 100vh;
display: flex;
flex-direction: row;

justify-content: center;
align-items: center;
overflow-x: hidden;
overflow-y: hidden;
@media only screen and (max-width: 728px) {
    flex-direction: column;
  }

`

export const Card = styled.div`
width: 100%;
height: 10vh;
display: flex;
justify-content: space-evenly;
align-items: center;
background:#F8F8FA;
cursor:pointer;

`

export const Box = styled.div`

display: flex;
justify-content: space-between;
width:14vw;

`

export const Imagem = styled.img`

width:15vh;
height: 15vh;
border-radius:100%
`

export const Texto = styled.p`



`
export const Icon = styled.i`
font-size:30px;
padding:10px;
color:${props => props.color ? props.color : 'black'}


`
export const Spacer = styled.div`
    width:${props => props.width ? props.width + 'px' : '100px'};
    height: 2vh;


`