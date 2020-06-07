import React from 'react';
import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarPlus } from '@fortawesome/free-solid-svg-icons'

function AddTask() {
  return (
    <MasterAddTask>
      <FontAwesomeIcon icon={faCalendarPlus} color='#ffa556' size='xs'/>
      <Text>Planifier une tâche</Text>
    </MasterAddTask>
  );
}

export default AddTask;

const MasterAddTask = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100px;
  border-radius: 4px;
  box-shadow: inset 0px 1px 2px rgba(0, 0, 0, 0.15);
`
const Text = styled.p`
  margin: 0;
  padding: 10px;
  color: #535c6e;
  font-size: 12px;
`
