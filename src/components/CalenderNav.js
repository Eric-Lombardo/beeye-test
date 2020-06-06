import React from 'react';
import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faPause, faArrowRight, faArrowLeft, faCalendar, faCalendarAlt, faSlidersH } from '@fortawesome/free-solid-svg-icons'


function CalenderNav() {
  return (
    <MasterCalender>
      <Left>
        <Button>
          <Icon><FontAwesomeIcon icon={faMapMarkerAlt} color='orange'/></Icon>
          Aujourd'hui
        </Button>

        <Button>
          <FontAwesomeIcon icon={faArrowLeft} color='orange'/>
        </Button>

        <Button>
          <FontAwesomeIcon icon={faArrowRight} color='orange'/>
        </Button>

        <Container>
          <FontAwesomeIcon icon={faCalendar} color='orange'/>
          <Options>
            <option>Lundi 07 Octobre - Dimanche 13 Octobre</option>
            <option>Lundi 14 Octobre - Dimanche 21 Octobre</option>
            <option>Lundi 22 Octobre - Dimanche 29 Octobre</option>
          </Options>
        </Container>

        <Container>
          <FontAwesomeIcon icon={faCalendarAlt} color='orange'/>
          <Options>
            <option>Semaine</option>
            <option>1</option>
            <option>2</option>
          </Options>
        </Container>

        <Button>
          <Icon><FontAwesomeIcon icon={faPause} color='orange'/></Icon>
          Écran Divisé
        </Button>
      </Left>

      <Right>
        <BadgeContainer>
          <Badge>10</Badge>
          <span>Conflits</span>
        </BadgeContainer>

        <BadgeContainer>
          <Icon><FontAwesomeIcon icon={faSlidersH} color='orange'/></Icon>
          Personnaliser
        </BadgeContainer>

      </Right>
    </MasterCalender>
  );
}

export default CalenderNav;

const MasterCalender = styled.div`
  margin-top: 2px;
  background-color: #fff9f2;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const Button = styled.button`
  border: none;
  outline: none;
  background-color: white;
  color: black;
  margin: 0 5px;
  cursor: pointer;
  height: 40px;
  padding: 0 15px;
  border-radius: 4px;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.1);
`
const Icon = styled.span`
  cursor: pointer;
  margin-right: 10px;
`
const Options = styled.select`
  border: none;
  outline: none;
  background-color: white;
  height: 40px;
  color: black;
  border-radius: 10px;
  padding: 0 15px;
  cursor: pointer;
`
const Container = styled.div`
  display: flex;
  background-color: white;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
  border-radius: 4px;
  margin: 0 5px;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.1);
`
const Left = styled.div`
  display: flex;
`
const Right = styled.div`
  display: flex;
`
const BadgeContainer = styled.div`
  background-color: white;
  display: flex;
  height: 40px;
  padding: 0 20px;
  border-radius: 20px;
  align-items: center;
  margin-right: 5px;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.1);
`
const Badge = styled.div`
  background-color: #fff9f2;
  color: #ff9949;
  margin-right: 10px;
  padding: 0 5px;
  border-radius: 20px;
  box-shadow: inset 0px 1px 2px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
`