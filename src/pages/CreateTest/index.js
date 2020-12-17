import React, { useState } from 'react';
import styled from 'styled-components';
import { postData } from '../../services/api';
import { Nav } from '../../components';
import FormToSendTest from './FormToSendTest';

export default function CreateTest() {
  const [ name, setName ] = useState('');
  const [ period, setPeriod ] = useState('');
  const [ typeTest, setTypeTest ] = useState('');
  const [ university, setUniversity ] = useState('');
  const [ subject, setSubject ] = useState('');
  const [ teacher, setTeacher ] = useState('');
  const [ url, setUrl ] = useState('');
  const [ disabledButton, setDisabledButton ] = useState(true);

  function submitNewTest(e){
    e.preventDefault();
    if(disabledButton) return;
    setDisabledButton(true);

    const data = { 
      name,
      period,
      typeTest,
      university: university.id,
      subject: subject.id,
      teacher: teacher.id,
      url 
    }

    console.log(data);
    //const request = postData('/newTeste', data);
    //request.then(response => console.log('sucesso'))
    //request.catch(err => console.log(err))
  }

  return (
    <Container>
      <Nav />
      <FormToSendTest 
        name={name}
        setName={setName}
        period={period}
        setPeriod={setPeriod}
        typeTest={typeTest}
        setTypeTest={setTypeTest}
        university={university}
        setUniversity={setUniversity}
        subject={subject}
        setSubject={setSubject}
        teacher={teacher}
        setTeacher={setTeacher}
        url={url}
        setUrl={setUrl}
        disabledButton={disabledButton}
        submitNewTest={submitNewTest}
        setDisabledButton={setDisabledButton}
      />
    </Container>
  )
}

const Container = styled.main`
  margin-top: 150px;
`;