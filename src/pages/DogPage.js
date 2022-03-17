import { useState } from "react";
import BMIForm from "../components/BMIForm";
import { DOG } from "../constants";

function DogPage() {
  const [height, setHeight] = useState('')
  const [weight, setWeight] = useState('')

  const handleDogChange = (e) => {

    const { name, value } = e.target
    if (name === 'height') {
      setHeight(value)
    } else {
      setWeight(value)
    }
  }

  return (
    <BMIForm
      type={DOG}
      height={height}
      weight={weight}
      handleChange={handleDogChange}
    />

  );
}

export default DogPage;