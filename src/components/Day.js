import React from 'react';
import styled from "styled-components"
import Card from './Card'


function Day(props) {

  const {name, date, tasks} = props;
  const taskList = [];

  for (let i = 0; i < tasks; i++) {
    taskList.push(<Card />)
  }

  return (
    <MasterDay>
      
      <Header>
        <DayName>{name}</DayName>
        <DayNumber>{date}</DayNumber>
      </Header>

      <SubHeader> 0 / 3 </SubHeader>

      {taskList}

    </MasterDay>
  );
}

export default Day;

const MasterDay = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;
  border: 2px solid black;
  bakground-color: #f5f9fc;
  min-width: 140px;
`
const Header = styled.div`
  display: flex;
  justify-content: space-between;
`
const DayName = styled.p`
  margin: 0;
  color: #818a9e;
  font-size: 12px;
`
const DayNumber = styled.p`
  margin: 0;
  color: #b7bfd6;
  font-size: 12px;
`
const SubHeader = styled.h3`
  color: #29303d;
  align-self: center;
`
