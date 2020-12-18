import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  paper: {
    backgroundColor: '#36313D',
    border: 'none',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function TransitionsModal(props) {
  const classes = useStyles();
  const { open, setOpen, children, onClickComfirm } = props;

  const handleClose = () => {
    setOpen(false);
  };

  return (   
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <div className={classes.paper}>
          {children}
          <BoxButtons>
            <Button color="secondary" onClick={handleClose}>Cancelar</Button>
            <Button variant="contained" color="primary" onClick={onClickComfirm}>
              Adicionar
            </Button>
          </BoxButtons>
        </div>
      </Fade>
    </Modal>
  );
}

const BoxButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
  
  button{
    margin: 5px;
  }
`;