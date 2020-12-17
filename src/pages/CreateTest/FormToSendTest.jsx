import React, { useState } from 'react';
import styled from 'styled-components';

import { Input, Select, Autocomplete } from '../../components';

export default function FormToSendTest() {
  const [ name, setName ] = useState('');
  const [ period, setPeriod ] = useState('');
  const [ typeTest, setTypeTest ] = useState('');
  const [ university, setUniversity ] = useState('');
  const [ subject, setSubject ] = useState('');
  const [ teacher, setTeacher ] = useState('');
  const [ url, setUrl ] = useState('');


  return (
    <Container>
      <Input 
        placeholder='Nome'
        type='text'
        value={name}
        onChange={(e) => setName(e.taget.value)}
      />
      <Select 
        label='Semestre'
        options={['1° periodo', '2° periodo', 'Eletiva']}
        value={period}
        onChange={(e) => setPeriod(e.taget.value)}
      />
      <Select 
        label='Tipo de prova'
        options={['P1', 'P2', 'P3', 'PF', '2ch', 'Outras']}
        value={typeTest}
        onChange={(e) => setTypeTest(e.taget.value)}
      />
      <Autocomplete 
        label='Universidade'
        options={['P1', 'P2', 'P3', 'PF', '2ch', 'Outras']}
        value={university}
        onChange={(e) => setUniversity(e.taget.value)}
      />
      <Autocomplete 
        label='Disciplina'
        options={['P1', 'P2', 'P3', 'PF', '2ch', 'Outras']}
        value={subject}
        onChange={(e) => setSubject(e.taget.value)}
      />
      <Autocomplete 
        label='Professor'
        options={['P1', 'P2', 'P3', 'PF', '2ch', 'Outras']}
        value={teacher}
        onChange={(e) => setTeacher(e.taget.value)}
      />
      <Input 
        placeholder='Link'
        type='url'
        value={url}
        onChange={(e) => setUrl(e.taget.value)}
      />
    </Container>
  )
}

const Container = styled.form`
  width: 90%;
  height: 500px;
  background-color: ${props => props.theme.colors.secondary};
  border-radius: ${props => props.theme.border.radius};
  box-shadow: ${props => props.theme.shadow.box};
  padding: 3% 5%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;