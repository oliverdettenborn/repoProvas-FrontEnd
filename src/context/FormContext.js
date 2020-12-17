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
  const [ resfresh, setRefresh ] = useState([]);


  useEffect(() => {
    const request = getData('/getAllSchoolsInformations')
    request.then(({ data }) => {
      setListUniversities([...data.universities]);
      setListSubjects([...data.subjects]);
      setListTeachers([...data.teachers]);
    })
    request.catch(err => console.log(err))
  }, [resfresh])

  useEffect(() => {
    //getTypeTest and getPeriod
    const requestTypeTest = getData('/getTypeTest')
    requestTypeTest.then(({ data }) => {
      setListTypeTest([...data]);
    })
    requestTypeTest.catch(err => console.log(err))

    const requestPeriod = getData('/getPeriod')
    requestPeriod.then(({ data }) => {
      setListPeriod([...data]);
    })
    requestPeriod.catch(err => console.log(err))
  }, [resfresh])

  return (
    <FormContext.Provider 
      value={{ 
        listUniversities, 
        listSubjects, 
        listTeachers,
        listPeriod,
        listTypeTest,
        setRefresh
      }}
    >
      {props.children}
    </FormContext.Provider>
  );
}