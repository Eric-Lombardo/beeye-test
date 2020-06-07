import React from 'react';
import styled from "styled-components"
import Day from './Day'


function MainDisplay() {
  return (
    <MasterDisplay>
      
      <Month>Janvier</Month>

      <DayList>
        <Day name='LUNDI' date='01' tasks={3}/>
        <Day name='MARDI' date='02' tasks={4}/>
        <Day name='MERCREDI' date='03' tasks={4}/>
        <Day name='JEUDI' date='04' tasks={4}/>
        <Day name='VENDREDI' date='05' tasks={4}/>
        <Day name='SAMEDI' date='06' tasks={0}/>
        <Day name='DIMANCHE' date='07' tasks={0}/>
      </DayList>

    </MasterDisplay>
  );
}

export default MainDisplay;

const MasterDisplay = styled.div`
  display: flex;
  flex-direction: column;
`
const Month = styled.h4`
  color: #b7bfd6;
  margin: 0;
  padding: 15px;
  width: 100%;
`
const DayList = styled.div`
  display: flex;
`
