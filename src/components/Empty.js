import React from 'react';
import styled from "styled-components"


function Empty() {

  return (
    <MasterEmpty>
      <Text>AIR QUÊBEC</Text>
      <ColorAccent></ColorAccent>
    </MasterEmpty>
  );
}

export default Empty;

const MasterEmpty = styled.div`
  background-color: #fff;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);
  padding: 5px;
  position: relative;
  overflow: hidden;
  margin-bottom: 5px;
`
const Text = styled.p`
  font-size: 11px;
  color: #687185;
  margin: 0;
`
const ColorAccent = styled.div`
  background-color: #b6e0a0;
  height: 10px;
  width: 40px;
  border-radius: 4px;
  position: absolute;
  top: -5px;
  right: 5px;
`