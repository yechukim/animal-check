import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { DOG, CAT } from '../constants'
import { getAnimalEmoji } from '../utils/calc';
import UseAnimations from 'react-useanimations'
import playPause from 'react-useanimations/lib/playPause'
import musicSrc from '../assets/fun.mp3'

const Wrapper = styled.div`
  height:64px;
  width:100%;
  background-color:#F7C78C;
  display:flex;
  align-items:center;
  position:relative;
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

const MusicWrapper = styled.div`
  position:absolute;
  right:100px;
  cursor:pointer;
`

function Header() {

  const [whatClick, setWhatClicked] = useState('');
  const [isMuted, setIsMuted] = useState(true);
  const audioRef = useRef()

  useEffect(() => {
    audioRef.current.volume = 0.3
  }, [])

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

  const handleAudio = () => {
    setIsMuted(!isMuted)
    isMuted ? audioRef.current.play() : audioRef.current.pause()
  }

  return (
    <Wrapper onClick={handleClick}>
      <Menu to="/">
        홈으로
      </Menu>
      <Menu to="/dog" >
        {DOG}
      </Menu>
      <Menu to="/cat">
        {CAT}
      </Menu>
      <MusicWrapper>
        <audio
          loop
          ref={audioRef}
          src={musicSrc}
          muted={isMuted}>
        </audio>
        <UseAnimations
          strokeColor='#fff'
          reverse={true}
          onClick={handleAudio}
          size={24}
          animation={playPause}
        />
      </MusicWrapper>
      <Profile>
        {getAnimalEmoji(whatClick)}
      </Profile>
    </Wrapper>);
}

export default Header;