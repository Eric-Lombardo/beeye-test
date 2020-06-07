import React from 'react';
import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faBell, faQuestionCircle, faCog, faFolderOpen} from '@fortawesome/free-solid-svg-icons'


function Header() {
  return (
    <MasterHeader>
      <Left>
        <Logo src={'https://www.placecage.com/30/30'}/>
        <Button>Gestion</Button>
        <Button>Temps</Button>
        <Button>Analyse</Button>
      </Left>

      <Right>
        <Container>
          <FontAwesomeIcon icon={faFolderOpen} color='white'/>
          <Options>
            <option>Ajouter</option>
            <option>1</option>
            <option>2</option>
          </Options>
        </Container>
        <Icon><FontAwesomeIcon icon={faSearch} color='white'/></Icon>
        <Icon><FontAwesomeIcon icon={faBell} color='white'/></Icon>
        <Icon><FontAwesomeIcon icon={faQuestionCircle} color='white'/></Icon>
        <Icon><FontAwesomeIcon icon={faCog} color='white'/></Icon>
        <Icon><User src={'https://www.placecage.com/30/30'} /></Icon>
      </Right>

    </MasterHeader>
  );
}

export default Header;

const MasterHeader = styled.div`
  background-color: #1f2530;
  display: flex;
  justify-content: space-between;
  height: 50px;
  width: 100%;
`
const Button = styled.button`
  border: none;
  outline: none;
  background-color: #1f2530;
  color: white;
  margin: 0 5px;
  cursor: pointer;
`
const User = styled.img`
  border-radius: 50%;
`
const Left = styled.div`
  display: flex;
  align-items: center;
`
const Right = styled.div`
  display: flex;
  align-items: center;
`
const Logo = styled.img`
  margin: 2px 15px; 
`
const Icon = styled.div`
  margin: 0 10px;
  cursor: pointer;
`
const Options = styled.select`
  border: none;
  outline: none;
  background-color: #343C4b;
  height: 30px;
  color: white;
  padding: 0 15px;
  cursor: pointer;
`
const Container = styled.div`
  display: flex;
  background-color: blue;
  align-items: center;
  justify-content: center;
  background-color: #343C4b;
  width: 150px;
  border-radius: 10px;
`