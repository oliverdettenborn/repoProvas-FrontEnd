import React, { useState, useContext } from 'react';
import { Modal, Input } from '../../components';
import { postData } from '../../services/api';
import FormContext from '../../context/FormContext';

export default function CreateUniversity(props) {
  const { resfresh, setRefresh } = useContext(FormContext);
  const { modalUniversityIsOpen, setModalUniversityIsOpen } = props;
  const [ initial, setInitial ] = useState('');
  const [ fullName, setFullName ] = useState('');

  function createNewUniversity(){
    const data = { initial, fullName };
    const request = postData('/university/create', data);
    request.then(() => {
      setRefresh(!resfresh);
      setModalUniversityIsOpen(false);
    })
    request.catch(() => {
      alert("Ops, tivemos um erro inesperado, tente novamente mais tarde!")
    })
  }
  return (
    <>
      <Modal
        open={modalUniversityIsOpen}
        setOpen={setModalUniversityIsOpen}
        onClickComfirm={createNewUniversity}
      >
        <Input 
          placeholder='Sigla da universidade'
          type='text'
          value={initial}
          onChange={(e) => setInitial(e.target.value.toUpperCase())}
        />
        <Input 
          placeholder='Nome completo da universidade'
          type='text'
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
      </Modal>
    </>
  )
}
