import React from 'react';
import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faExclamationTriangle} from '@fortawesome/free-solid-svg-icons'
import Card from './Card'
import UserDetails from './UserDetails'


function SideBar() {
  return (
    <MasterSidebar>

      <MasterInput>
        <InputContainer>
          <Icon><FontAwesomeIcon icon={faSearch} color='grey' size='lg'/></Icon>
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

      <UserDetails />
    </MasterSidebar>
  );
}

export default SideBar;

const MasterSidebar = styled.div`
  display: flex;
  flex-direction: column;
  // background-color: blue;
  height: 100vh;
  width: 30vw;
`
const MasterInput = styled.div`
  background-color: white;
  padding: 10px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.15);
`
const InputContainer = styled.div`
  height: 70px;
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
  height: 40px;
  border: none;
  outline: none;
  width: 100%;
  margin-right: 5px; 
  font-size: 22px;
`
const Icon = styled.div`
  margin: 0 20px;
`
const Label = styled.div`
  display: flex;
  background-color: rgba(225, 114, 114, 0.2);
  justify-content: space-around;
  align-items: center;
  padding: 10px;
  width: 120px;
  border-radius: 4px;
  align-self: flex-start;
`
const LabelText = styled.div`
  color: #ff7272;
  margin-left: 10px;
`
const Details = styled.div`
  background-color: #f2f4f7;
  display: flex;
  justify-content: space-between;
  padding: 15px;
`
const CardList = styled.div`
  display: flex;
  flex-direction: column;
`
