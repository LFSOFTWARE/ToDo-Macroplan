import React, { useContext, useState } from "react";

import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Box } from '@mui/material';
import { TarefaContext } from "../../providers/Tarefa";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const Login = () => {
    const { usuarios,setUser,setReflash } = useContext(TarefaContext)
    
    const [open, setOpen] = useState(true);
    const handleClose = () => setOpen(false);
    const setUsuario = (user) =>{
         var usuario = user.split('-')

        setUser({
            nome:usuario[0],
            _id:usuario[1]
        })
        setReflash()
        handleClose()
    }
    return (
        <div>
            <Modal
                open={open}
                onClose={usuarios.length > 0 ? '':handleClose }

                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Selecione o usuário :)
                    </Typography>
                    <label for="usuario" className="form-label mt-4">Usuário</label>
                    <select onChange={(e) => setUsuario(e.target.value) } className="form-select" aria-label="Usuario" id="usuario">
                        <option selected>Selecione um usuário para a tarefa</option>
                        {
                            usuarios?.map((usuario, index) => (
                                <option key={index} value={usuario.user.nome+'-'+usuario.user._id}>{usuario.user.nome}</option>

                            ))

                        }
                    </select>
                </Box>
            </Modal>
        </div>
    );
}

export default Login
