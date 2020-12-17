import React, { useContext } from 'react';
import styled from 'styled-components';
import FormContext from '../../context/FormContext';

import { SelectFilter, Button } from '../../components';

export default function Filter(props) {
  const { 
    listSubjects, 
    listTeachers
  } = useContext(FormContext);

  const {
    university,
    setUniversity,
    subject,
    setSubject,
    teacher,
    setTeacher,
    setFilterIsOpen
  } = props

  return (
    <Container>
      <SelectFilter
        label='Disciplina'
        options={listSubjects}
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />
      {
        (subject !== "") &&
        <SelectFilter
          label='Professor'
          options={listTeachers}
          value={teacher}
          onChange={(e) => setTeacher(e.target.value)}
        />
      }
      <MenuButtons>
        <ButtonCancel 
          onClick={() => setFilterIsOpen(false)}
        >
          Cancelar
        </ButtonCancel>
        <Button
          width='70%'
          height='40px'
        >
          Pesquisar
        </Button>
      </MenuButtons>
    </Container>
  )
}

const Container = styled.nav`
  position: absolute;
  width: 50%;
  padding: 5%;
  top: 0;
  right: 0;
  z-index: 8;
  background-color: ${props => props.theme.colors.secondary};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

const MenuButtons = styled.div`
  width: 90%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonCancel = styled.button`
  width: 40%;
  height: 40px;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
  color: ${props => props.theme.colors.white};
`;