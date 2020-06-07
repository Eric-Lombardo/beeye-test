import React from 'react';
import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'


function UserDetails(props) {
  const {name, title} = props

  return (
    <MasterUser>
      <Group>
        <User src={'https://www.placecage.com/30/30'}/>
        <UserContainer>
          <Text>{name}</Text>
          <SubText>{title}</SubText>
        </UserContainer>
      </Group>

      <FontAwesomeIcon icon={faChevronDown} color='grey'/>
    </MasterUser>
  );
}

export default UserDetails;
const MasterUser = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 5px;
  background-color: #fcfcfc;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.15);
`
const Group = styled.div`
  display: flex;
  align-items: center;
`
const User = styled.img`
  border-radius: 50%;
  margin-left: 5px;
`
const UserContainer = styled.div`
  display: column;
  margin-left: 5px;
`
const Text = styled.p`
  margin: 0;
  font-size: 12px;
`
const SubText = styled.p`
  margin: 0;
  font-size: 10px;
  color: #b7bfd6
`
