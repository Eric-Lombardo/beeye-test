import React from 'react';
import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'


function UserDetails() {
  return (
    <MasterUser>
      <User src={'https://www.placecage.com/50/50'}/>
      <UserContainer>
        <Text>Nom du Collaborateur</Text>
        <SubText>Poste du Collaborateur</SubText>
      </UserContainer>
      <FontAwesomeIcon icon={faChevronDown} color='grey' size='lg'/>
    </MasterUser>
  );
}

export default UserDetails;
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
