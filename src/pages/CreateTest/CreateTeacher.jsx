import React, { useState, useContext } from 'react';
import { Modal, Input, Autocomplete } from '../../components';
import { postData } from '../../services/api';
import FormContext from '../../context/FormContext';

export default function CreateTeacher(props) {
  const { resfresh, setRefresh, listUniversities, listSubjects } = useContext(FormContext);
  const { modalTeacherIsOpen, setModalTeacherIsOpen } = props;
  const [ name, setName ] = useState('');
  const [ university, setUniversity ] = useState('');
  const [ subject, setSubject ] = useState('');

  function createNewTeacher(){
    if(name === "" || university === "" || subject === ""){
      return alert('Preencha todos os campos!');
    }

    const data = { name, idUniversity: university.id, idSubject: subject.id };
    const request = postData('/teacher/create', data);
    request.then(() => {
      setRefresh(!resfresh);
      setModalTeacherIsOpen(false);
    })
    request.catch(() => {
      alert("Ops, tivemos um erro inesperado, tente novamente mais tarde!")
    })
  }
  return (
    <Modal
      open={modalTeacherIsOpen}
      setOpen={setModalTeacherIsOpen}
      onClickComfirm={createNewTeacher}
    >
      <Autocomplete 
        label='Universidade do professor'
        options={listUniversities}
        value={university}
        getOptionLabel={(option) => option.initial}
        onChange={(e, newValue) => {
          setUniversity((newValue === null) ? "" : newValue)
        }}
      />
      {
        (university !== '') &&
        <Autocomplete 
          label='Disciplina do professor'
          options={listSubjects.filter(s => s.idUniversity === university.id)}
          value={subject}
          getOptionLabel={(option) => option.name}
          onChange={(e, newValue) => setSubject((newValue === null) ? "" : newValue)}
        />
      }
      {
        (university !== "" && subject !== "") &&
        <Input 
          placeholder='Nome do professor'
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      }
    </Modal>
  )
}
