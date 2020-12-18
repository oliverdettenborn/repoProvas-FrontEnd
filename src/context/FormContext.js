import React, { createContext, useState, useEffect } from 'react';
import { getData } from '../services/api';

const FormContext = createContext();
export default FormContext;

export function FormProvider(props) {
  const [ listUniversities, setListUniversities ] = useState([]);
  const [ listSubjects, setListSubjects, ] = useState([]);
  const [ listTeachers, setListTeachers ] = useState([]);
  const [ listPeriod, setListPeriod ] = useState([]);
  const [ listTypeTest, setListTypeTest] = useState([]);
  const [ resfresh, setRefresh ] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const request = getData('/getAllSchoolsInformations')
    request.then(({ data }) => {
      setListUniversities([...data.universities]);
      setListSubjects([...data.subjects]);
      setListTeachers([...data.teachers]);
      setLoading(false);
    })
    request.catch(() => alert('Ops, tivemos algum erro inesperado, por favor recarrega a página!'))
  }, [resfresh])

  useEffect(() => {
    setLoading(true);
    try{
      const requestTypeTest = getData('/getTypeTest')
      requestTypeTest.then(({ data }) => {
        setListTypeTest([...data]);
      })

      const requestPeriod = getData('/getPeriod')
      requestPeriod.then(({ data }) => {
        setListPeriod([...data]);
      })
    }catch{
      alert('Ops, tivemos algum erro inesperado, por favor recarrega a página!')
    }finally{
      setLoading(false)
    }
  }, [])

  return (
    <FormContext.Provider 
      value={{ 
        listUniversities, 
        listSubjects, 
        listTeachers,
        listPeriod,
        listTypeTest,
        resfresh,
        setRefresh,
        loading
      }}
    >
      {props.children}
    </FormContext.Provider>
  );
}