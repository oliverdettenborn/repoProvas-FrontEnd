import React, { useState, useContext } from 'react';
import { Modal, Input, Autocomplete } from '../../components';
import { postData } from '../../services/api';
import FormContext from '../../context/FormContext';

export default function CreateSubject(props) {
  const { resfresh, setRefresh, listUniversities } = useContext(FormContext);
  const { modalSubjectIsOpen, setModalSubjectIsOpen } = props;
  const [ name, setName ] = useState('');
  const [ university, setUniversity ] = useState('');

  function createNewSubject(){
    if(name === "" || university === ""){
      return alert('Preencha todos os campos!');
    }

    const data = { name, idUniversity: university.id };
    const request = postData('/subject/create', data);
    request.then(() => {
      setRefresh(!resfresh);
      setModalSubjectIsOpen(false);
    })
    request.catch(() => {
      alert("Ops, tivemos um erro inesperado, tente novamente mais tarde!")
    })
  }
  return (
    <Modal
      open={modalSubjectIsOpen}
      setOpen={setModalSubjectIsOpen}
      onClickComfirm={createNewSubject}
    >
      <Autocomplete 
        label='Universidade da disciplina'
        options={listUniversities}
        value={university}
        getOptionLabel={(option) => option.initial}
        onChange={(e, newValue) => {
          setUniversity((newValue === null) ? "" : newValue)
        }}
      />
      {
        (university !== "") &&
        <Input 
          placeholder='Nome da disciplina'
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      }
    </Modal>
  )
}
