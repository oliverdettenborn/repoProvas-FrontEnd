import React from "react";
import styled from "styled-components";
import { BsFileEarmarkText } from 'react-icons/bs';
import { device } from '../../assets/mediaQuery';


export default function Item(props) {
  const { 
    name, 
    url, 
    teacher, 
    period, 
    typeTest 
  } = props.test

  return (
    <ItemContainer>
      <File href={url} target='_blank'>
        <BsFileEarmarkText size='1em' />
        <p>{name}</p>
      </File>
      <Box>
        <NameTeacher>Profº {teacher}</NameTeacher>
        <DescriptionTest>{period} / {typeTest}</DescriptionTest>
      </Box>
    </ItemContainer>
  );
}

const ItemContainer = styled.li`
  padding: 15px;
  height: 60px;
  background-color: ${props => props.theme.colors.white};
  color: ${props => props.theme.colors.black};
  margin: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (${device.tablet}){
    height: 85px;
  }
`;

const File = styled.a`
  background-color: ${props => props.theme.colors.white};
  color: ${props => props.theme.colors.black};
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;

  p{
    font-size: ${props => props.theme.fontSizes.descriptions};
    padding-left: 5px;
    
  }

  :hover{
    text-decoration: underline;
  }

  @media (${device.tablet}){
    p{
      font-size: ${props => props.theme.fontSizes.subSmall};
    }
    svg{
      font-size: 1.2em;
    }
  }
`;

const Box = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex-direction: column;
  flex-shrink: 0;
  font-size: ${props => props.theme.fontSizes.descriptions};
  width: 45%;
  text-align: right;
  text-shadow: none;
`;

const NameTeacher = styled.h6`
  overflow: hidden;
  text-overflow: ellipsis;
  word-wrap: none;
  font-size: ${props => props.theme.fontSizes.subSmall};

  @media (${device.tablet}){
    font-size: ${props => props.theme.fontSizes.small};
  }
`;

const DescriptionTest = styled.span`
  font-size: ${props => props.theme.fontSizes.descriptionsLarge};
  text-transform: uppercase;
  margin-top: 5px;
  color: ${props => props.theme.colors.gray};
  font-weight: bold;
  @media (${device.tablet}){
    font-size: ${props => props.theme.fontSizes.subSmall};
  }
`;