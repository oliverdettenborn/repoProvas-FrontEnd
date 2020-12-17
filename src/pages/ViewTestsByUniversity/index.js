import React, { useState } from 'react';
import styled from 'styled-components';
import { Nav } from '../../components';
import Filter from './Filter';
import { FaFilter } from 'react-icons/fa';

export default function CreateTest() {
  const [ subject, setSubject ] = useState('');
  const [ teacher, setTeacher ] = useState('');
  const [filterIsOpen, setFilterIsOpen] = useState(false);

  return (
    <Container>
      <Nav>
        <IconFilter onClick={() => setFilterIsOpen(!filterIsOpen)}/>
      </Nav>
      {/* {
        filterIsOpen &&
        <Filter 
          university={university}
          setUniversity={setUniversity}
          subject={subject}
          setSubject={setSubject}
          teacher={teacher}
          setTeacher={setTeacher}
          setFilterIsOpen={setFilterIsOpen}
        />
      } */}
    </Container>
  )
}

const Container = styled.main`
  margin-top: 120px;
  width: 80%;
  display: flex;
  flex-wrap: wrap;
`;

const IconFilter = styled(FaFilter)`
  position: absolute;
  right: 3%;
  z-index: 5;
  font-size: ${props => props.theme.fontSizes.medium};
  color: ${props => props.theme.colors.secondary};
`
