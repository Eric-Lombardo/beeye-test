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

const Text = styled.h1`
  margin: 0;
  padding: 15px;
  background-color: #fff;
  border-bottom: solid 2px rgba(0, 0, 0, 0.1)
`
