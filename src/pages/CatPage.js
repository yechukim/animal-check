import React, { useState } from 'react'
import BMIForm from '../components/BMIForm';
import { CAT } from '../constants';

function CatPage() {

  const [height, setHeight] = useState('')
  const [weight, setWeight] = useState('')

  const handleCatChange = (e) => {

    const { name, value } = e.target
    if (name === 'height') {
      setHeight(value)
    } else {
      setWeight(value)
    }
  }

  return (
    <div>
      <BMIForm
        type={CAT}
        height={height}
        weight={weight}
        handleChange={handleCatChange}
      />
    </div>
  );
}

export default CatPage;