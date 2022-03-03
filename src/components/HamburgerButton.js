import React from 'react'
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-left:15px;
  z-index:1;
  cursor:pointer;
`
const Line = styled.span`
  display:block;
  background-color:#333;
  width:30px;
  margin-bottom:5px;
  height:2px;

  :last-child{
    margin-bottom:0;
  }
`

function HamburgerButton() {
  return (
    <Wrapper>
      <Line></Line>
      <Line></Line>
      <Line></Line>
    </Wrapper>
  );
}

export default HamburgerButton;