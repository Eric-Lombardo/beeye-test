import React from 'react';
import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faCommentAlt } from '@fortawesome/free-solid-svg-icons'


function Card() {
  return (
    <MasterCard>
      
      <Header>
        <Badge>15 NOV</Badge>
        <Time>2h</Time>
      </Header>

      <div>
        <Company>AIR QUÉBEC</Company>
        <Tag>Expertise 2019</Tag>
        <Label>Reporting/Situation</Label>
      </div>

      <Footer>
        <Group>
          <FontAwesomeIcon icon={faHome} color='#cbcbcb' size='sm'/>
          <Text>Domicile</Text>
        </Group>
        <FontAwesomeIcon icon={faCommentAlt} color='#cbcbcb' size='sm'/>
      </Footer>

    </MasterCard>
  );
}

export default Card;

const MasterCard = styled.div`
  padding: 10px;
  border-radius: 4px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  margin-bottom: 5px;
  width: 110px;
`
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2px;
`
const Badge = styled.p`
  background-color: rgba(225, 114, 114, 0.2);
  color: #ff7272;
  padding: 2px 4px;
  border-radius: 4px;
  font-size: 8px;
  margin: 0;
`
const Time = styled.p`
  color: #535c6e;
  margin: 0;
  font-size: 14px;
`
const Company = styled.p`
  color: #687185;
  margin: 0;
  font-weight: 500;
  font-style: normal;
  font-size: 10px;
`
const Tag = styled.p`
  color: black;
  margin: 3px 0;
  font-weight: bold;
  font-style: normal;
  font-size: 10px;
`
const Label = styled.p`
  color: #818a9e;
  margin: 0;
  font-weight: normal;
  font-style: normal;
  font-size: 10px;
`
const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 4px;
`
const Group = styled.div`
  display: flex;
  justify-content: flex-start;
`
const Text = styled.p`
  color: #617496;
  font-weight: normal;
  font-style: normal;
  margin: 0 10px;
  font-size: 12px;
`
