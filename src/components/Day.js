import React from 'react';
import styled from "styled-components"
import Card from './Card'
import Empty from './Empty'
import AddTask from './AddTask'


function Day(props) {

  const {name, date, tasks, empty, addTask} = props;
  const taskList = [];
  const emptyList = [];

  for (let i = 0; i < tasks; i++) {
    taskList.push(<Card key={i}/>)
  }

  for (let i = 0; i < empty; i++) {
    emptyList.push(<Empty key={i}/>)
  }

  return (
    <MasterDay>
      
      <Group>
        <Header>
          <DayName>{name}</DayName>
          <DayNumber>{date}</DayNumber>
        </Header>

        <SubHeader> 0 / 3 </SubHeader>

        {taskList}

        {emptyList}

        {addTask && <AddTask />}
      </Group>

      <Footer> 0 / 3 </Footer>

    </MasterDay>
  );
}

export default Day;

const MasterDay = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 5px;
  bakground-color: #f5f9fc;
  min-width: 140px;
  margin-left: 3px;
`
const Group = styled.div`
  display: flex;
  flex-direction: column;
`
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #e4e4e4;
  border-bottom: 1px solid #e4e4e4;
  padding: 2px 0;
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
const SubHeader = styled.p`
  color: #29303d;
  align-self: center;
  font-size: 14px;
  margin: 10px 0;
`
const Footer = styled.p`
  color: #29303d;
  align-self: center;
  font-size: 14px;
  margin: 10px 0;
`
