import React from 'react';
import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faExclamationTriangle} from '@fortawesome/free-solid-svg-icons'
import Card from './Card'
import UserDetails from './UserDetails'


function SideBar() {
  return (
    <MasterSidebar>

      <div>
      <MasterInput>
        <InputContainer>
          <Icon><FontAwesomeIcon icon={faSearch} color='grey'/></Icon>
          <Input type='text' placeholder='Rechercher' />
        </InputContainer>
      </MasterInput>
      
      <UserDetails/>

      <Details>
        <Label>
          <FontAwesomeIcon icon={faExclamationTriangle} color='#ff7272' />
          <LabelText>EN RETARD</LabelText>
        </Label>

        <CardList>
          <Card/>
          <Card/>
        </CardList>
      </Details>
      </div>

      <UserDetails />
    </MasterSidebar>
  );
}

export default SideBar;

const MasterSidebar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 180px;
  background-color: #f2f4f7;
`
const MasterInput = styled.div`
  background-color: white;
  padding: 10px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.15);
`
const InputContainer = styled.div`
  height: 30px;
  background-color: white;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0 10px
  justify-content: center;
  border-radius: 4px;
  box-shadow: inset 0px 1px 3px rgba(0, 0, 0, 0.15);
`
const Input = styled.input`
  height: 20px;
  border: none;
  outline: none;
  width: 100%;
  margin-right: 5px; 
  font-size: 15px;
`
const Icon = styled.div`
  margin: 0 20px;
`
const Label = styled.div`
  display: flex;
  background-color: rgba(225, 114, 114, 0.2);
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  border-radius: 4px;
  transform: scale(0.8);
  margin-left: -7px;
  margin-bottom: 5px;
`
const LabelText = styled.p`
  color: #ff7272;
  margin: 0;
  margin-left: 10px;
  font-size: 10px;
  font-weight: bold;
`
const Details = styled.div`
  background-color: #f2f4f7;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 5px;
`
const CardList = styled.div`
  display: flex;
  flex-direction: column;
`
