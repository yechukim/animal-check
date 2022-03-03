import React from 'react'
import styled from 'styled-components';

const Wrapper = styled.div`
  height:100%;
  width:200px;
  background-color:#FF9C22;
  position:absolute;
  top:0;
 // left:-200px;
  transition: all .2s;
  padding-top:100px;
  padding-left:15px;
`

const Link = styled.a`
  display:block;
  text-decoration:none;
  font-size:1.4em;
  cursor:pointer;
  padding:5px 10px;
  color:#333;
  transition: all .4s;

  :hover{
    text-decoration:underline;
  }

`
function SideMenu() {
  return (
    <Wrapper>
      <Link>Dogs</Link>
      <Link>Cats</Link>
    </Wrapper>);
}

export default SideMenu;