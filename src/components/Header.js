import React from 'react'
import styled from 'styled-components';
import HamburgerButton from './HamburgerButton';

const Wrapper = styled.div`
  height:74px;
  width:100%;
  background-color:#F7C78C;
  display:flex;
  align-items:center;
`
const Profile = styled.div`
  width:50px;
  height:50px;
  border-radius:50%;
  background-color:#FF9C22;
  margin-left:auto;
  margin-right:10px;
  cursor:pointer;
`

function Header() {
  return (
    <Wrapper>
      <HamburgerButton />
      <Profile />
    </Wrapper>);
}

export default Header;