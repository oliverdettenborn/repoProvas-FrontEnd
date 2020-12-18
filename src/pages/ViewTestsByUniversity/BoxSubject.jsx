import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { BsChevronCompactDown } from 'react-icons/bs';
import { getData } from '../../services/api';

import ItemList from './ItemsList';
import { Spinner } from '../../components';

export default function BoxUniversity(props) {
  const { idSubject, name } = props;
  const { idUniversity } = useParams();
  const [isVisible, setVisibility] = useState(false);
  const [loading, setLoading] = useState(false);
  const [ tests, setTests ] = useState([]);

  useEffect(() => {
    setLoading(true);
    const request = getData(`/tests/${idUniversity}/subjects/${idSubject}`);
    request.then(response => {
      setLoading(false);
      setTests(response.data)
    })
  }, [idUniversity, idSubject ])

  return (
    <DropDownWrapper onClick={() => setVisibility(!isVisible)}
    >
      <Container>
        {name}
      </Container>
      <div>
        <Teachers isVisible={isVisible}>
          {
            loading 
              ? <Spinner width='10%' background='white' />
              : (tests.length === 0)
                ? <MessageBox>Nenhuma prova encontrada</MessageBox>
                : tests.map(t => <ItemList key={t.id} test={t} />)
          }
        </Teachers>
        <ToogleVisibilityIconContainer>
          <BsChevronCompactDown />
        </ToogleVisibilityIconContainer>
      </div>
    </DropDownWrapper>
    
  )
}

const DropDownWrapper = styled.section`
  background-color: ${props => props.theme.colors.secondary};
  flex-shrink: 0;
  width: 100%;
  height: fit-content;
  margin: 10px auto;
  font-family: ${props => props.theme.fontPrimary};
  text-shadow: ${props => props.theme.shadow.text};
  box-shadow: ${props => props.theme.shadow.box};
  font-size: ${props => props.theme.fontSizes.medium};
  border-radius: ${props => props.theme.border.radius};
  opacity: 1;
`;

const Container = styled.div`
  text-align: center;
  padding-top: 5px;
  text-align: center;
  text-transform: capitalize;
  margin: 15px;
`;

const Teachers = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  display: block;
  height: ${({ isVisible }) => (isVisible ? "auto" : "0")};
  overflow: hidden;
  transition: all 300ms ease;
`;

const ToogleVisibilityIconContainer = styled.div`
  display: flex;
  justify-content: center;
  border-top: 0.1px solid rgba(0,0,0,0.35);
`;

const MessageBox = styled.div`
  padding: 10px;
  cursor: pointer;
  background-color: ${props => props.theme.colors.white};
  font-size: ${props => props.theme.fontSizes.descriptions};
  text-align: center;
  color: ${props => props.theme.colors.black};
  margin: 0;
`;