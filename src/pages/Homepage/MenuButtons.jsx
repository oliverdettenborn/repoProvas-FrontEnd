import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { Button } from '../../components';
import { device } from '../../assets/mediaQuery';
import { VscNewFile } from 'react-icons/vsc';
import { MdPageview } from 'react-icons/md';


export default function Menubuttons() {
  const history = useHistory();

  return (
    <Container>
      <Button
        width='35%'
        height='125px'
        background='secondary'
        color='white'
        onClick={() => history.push('/adicionar-prova')}
      >
        <VscNewFile size='25%' />
        Adicionar uma<br/>nova prova
      </Button>
      <Button
        width='35%'
        height='125px'
        background='secondary'
        color='white'
        onClick={() => history.push('/visualizar-provas')}
      >
        <MdPageview size='28%' />
        Visualizar<br/>provas
      </Button>
    </Container>
  )
}

const Container = styled.section`
  display: flex;
  width: 100%;
  height: 140px;
  justify-content: space-evenly;
  align-items: center;
  margin: 25px 0;

  @media ${device.tablet}{
    width: 40%;
  }
`;
