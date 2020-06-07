import React from 'react';
import styled from "styled-components"


function Title() {
  return (
    <div>
      <Text>Mon Planning</Text>
    </div>
  );
}

export default Title;

const Text = styled.p`
  margin: 0;
  padding: 10px;
  background-color: #fff;
  border-bottom: solid 2px rgba(0, 0, 0, 0.1);
  font-size: 16px;
  font-weight: bold;
`
