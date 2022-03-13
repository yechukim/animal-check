import React, { useState } from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { DOG, CAT } from '../common/animals'

const Wrapper = styled.div`
  height:64px;
  width:100%;
  background-color:#F7C78C;
  display:flex;
  align-items:center;
`
const Profile = styled.div`
  width:50px;
  height:50px;
  border-radius:50%;
  background-color:#fff;

  margin-left:auto;
  margin-right:15px;
  cursor:pointer;
  display:flex;
  align-items:center;
  justify-content:center;
`
const Menu = styled(Link)`
  width:100px;
  text-align:center;
  transition: all .2s;
  cursor:pointer;
  text-decoration: none;
  color:#111;
    &:focus, &:hover, &:visited, &:link, &:active {
          text-decoration: none;
      }
      &:hover{
      }
`

const getAnimalEmoji = (name) => {
  if (name === DOG) return '🐶'
  if (name === CAT) return '🐱'
  return '🙈'
}

function Header() {

  const [whatClick, setWhatClicked] = useState('');

  const handleClick = e => {

    if (e.target.childElementCount > 3) return
    if (e.target.innerText === DOG) {
      return setWhatClicked(DOG)
    }
    else if (e.target.innerText === CAT) {
      return setWhatClicked(CAT)
    }
    return setWhatClicked('')
  }


  return (
    <Wrapper onClick={handleClick}>
      <Menu to="/">
        홈으로
      </Menu>
      <Menu to="/dog" >
        강아지
      </Menu>
      <Menu to="/cat">
        고양이
      </Menu>
      <Profile>
        {getAnimalEmoji(whatClick)}
      </Profile>
    </Wrapper>);
}

export default Header;