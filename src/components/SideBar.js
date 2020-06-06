import React from 'react';
import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faChevronDown} from '@fortawesome/free-solid-svg-icons'


function SideBar() {
  return (
    <MasterSidebar>

      <MasterInput>
        <InputContainer>
          <Icon><FontAwesomeIcon icon={faSearch} color='grey' size='lg'/></Icon>
          <Input type='text' placeholder='Rechercher' />
        </InputContainer>
      </MasterInput>

      <MasterUser>
        <User src={'https://www.placecage.com/50/50'}/>
        <UserContainer>
          <Text>Nom du Collaborateur</Text>
          <SubText>Poste du Collaborateur</SubText>
        </UserContainer>
        <FontAwesomeIcon icon={faChevronDown} color='grey' size='lg'/>
      </MasterUser>

    </MasterSidebar>
  );
}

export default SideBar;

const MasterSidebar = styled.div`
  display: flex;
  flex-direction: column;
  background-color: blue;
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
const MasterUser = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20px 5px;
  background-color: #fcfcfc;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.15);
`
const User = styled.img`
  border-radius: 50%;
`
const UserContainer = styled.div`
  display: column;
`
const Text = styled.p`
  margin: 0;
  font-size: 18px;
`
const SubText = styled.p`
  margin: 0;
  font-size: 14px;
  color: #b7bfd6
`
