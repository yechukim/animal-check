import React, { useState } from 'react'
import BMIForm from '../components/BMIForm';
import styled from 'styled-components'

const Title = styled.p`
  text-align:center;
  margin-top:50px;
  font-size:1.2em;
`

function HomePage() {
  const [height, setHeight] = useState('')
  const [weight, setWeight] = useState('')


  const handleHumanChange = (e) => {

    const { name, value } = e.target
    if (name === 'height') {
      setHeight(value)
    } else {
      setWeight(value)
    }
  }

  return (
    <div>
      <Title>애기들 비만도보다 내 비만도를 먼저 확인해보고 싶다면?</Title>
      <BMIForm
        height={height}
        weight={weight}
        handleChange={handleHumanChange}
      />
    </div>
  );
}

export default HomePage;