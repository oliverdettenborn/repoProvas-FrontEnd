import React, { useContext } from 'react';
import styled from 'styled-components';
import FormContext from '../../context/FormContext';
import { Input, Select, Autocomplete, Button } from '../../components';

export default function FormToSendTest(props) {
  const { listUniversities, listSubjects, listTeachers, listPeriod, listTypeTest } = useContext(FormContext);
  
  const {
    name,
    setName,
    period,
    setPeriod,
    typeTest,
    setTypeTest,
    university,
    setUniversity,
    subject,
    setSubject,
    teacher,
    setTeacher,
    url,
    setUrl,
    disabledButton,
    setDisabledButton,
    submitNewTest,
  } = props

  return (
    <Container onSubmit={submitNewTest}>
      <Input 
        placeholder='Nome'
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Select 
        label='Semestre'
        options={listPeriod}
        value={period}
        onChange={(e) => setPeriod(e.target.value)}
      />
      <Select 
        label='Tipo de prova'
        options={listTypeTest}
        value={typeTest}
        onChange={(e) => setTypeTest(e.target.value)}
      />
      {
        (typeTest !== "") && 
          <Autocomplete 
            label='Universidade'
            options={listUniversities}
            value={university}
            getOptionLabel={(option) => option.initial}
            onChange={(e, newValue) => {
              setUniversity((newValue === null) ? "" : newValue)
            }}
          />
      }
      {
        (university !== "") &&
          <Autocomplete 
            label='Disciplina'
            options={listSubjects.filter(s => s.idUniversity === university.id)}
            value={subject}
            getOptionLabel={(option) => option.name}
            onChange={(e, newValue) => setSubject((newValue === null) ? "" : newValue)}
          />
      }
      {
        (university !== "" && subject !== "") &&
        <Autocomplete 
          label='Professor'
          options={listTeachers.filter(s => s.idUniversity === university.id && s.idSubject === subject.id)}
          value={teacher}
          getOptionLabel={(option) => option.name}
          onChange={(e, newValue) => setTeacher((newValue === null) ? "" : newValue)}
        />
      }
      {
        (university !== "" && subject !== "" && teacher !== "") &&
          <Input 
            placeholder='Link'
            type='url'
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
      }
      {
        (university !== "" && subject !== "" && teacher !== "" && url !== '') && setDisabledButton(false)
      }
      <Button
        type='submit'
        disabledButton={disabledButton}
        width='50%'
        height='50px'
        background='primary'
        color='white'
      >
        Adicionar prova
      </Button>
    </Container>
  )
}

const Container = styled.form`
  width: 90%;
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