import React, { useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { postData } from '../../services/api';
import { Nav } from '../../components';
import FormToSendTest from './FormToSendTest';
import CreateUniversity from './CreateUniversity';
import CreateSubject from './CreateSubject';
import CreateTeacher from './CreateTeacher';


export default function CreateTest() {
  const [ name, setName ] = useState('');
  const [ period, setPeriod ] = useState('');
  const [ typeTest, setTypeTest ] = useState('');
  const [ university, setUniversity ] = useState('');
  const [ subject, setSubject ] = useState('');
  const [ teacher, setTeacher ] = useState('');
  const [ url, setUrl ] = useState('');
  const [ disabledButton, setDisabledButton ] = useState(true);
  const [ error, setError ] = useState('');
  const history = useHistory();

  //states of modals
  const [ modalUniversityIsOpen, setModalUniversityIsOpen ] = useState(false);
  const [ modalSubjectIsOpen, setModalSubjectIsOpen ] = useState(false);
  const [ modalTeacherIsOpen, setModalTeacherIsOpen ] = useState(false);


  function submitNewTest(e){
    e.preventDefault();
    if(disabledButton) return;
    setDisabledButton(true);

    const data = { 
      name,
      idPeriod: period,
      idTypeTest: typeTest,
      idUniversity: university.id,
      idSubject: subject.id,
      idTeacher: teacher.id,
      url 
    }

    const request = postData('/tests/create', data);
    request.then(() => history.push('/'));
    request.catch(err => {
      setDisabledButton(false);
      if(err.response.status === 422){
        setError('Preencha os campos corretamente')
      }else{
        setError('Algo deu errado tente novamente mais tarde')
      }
    })
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
        error={error}
        openModalUniversity={setModalUniversityIsOpen}
        openModalSubject={setModalSubjectIsOpen}
        openModalTeacher={setModalTeacherIsOpen}
      />
      <CreateUniversity 
        modalUniversityIsOpen={modalUniversityIsOpen}
        setModalUniversityIsOpen={setModalUniversityIsOpen}
      />
      <CreateSubject 
        modalSubjectIsOpen={modalSubjectIsOpen}
        setModalSubjectIsOpen={setModalSubjectIsOpen}
      />
      <CreateTeacher 
        modalTeacherIsOpen={modalTeacherIsOpen}
        setModalTeacherIsOpen={setModalTeacherIsOpen}
      />
    </Container>
  )
}

const Container = styled.main`
  margin-top: 150px;
`;