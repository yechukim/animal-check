import { useState } from "react";
import Button from "../components/Button";
import FormWrapper from "../components/FormWrapper";
import Input from "../components/Input";

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
  const handleDogObesity = (e) => {

  }
  return (
    <FormWrapper>

      <Input
        placeholder='키를 입력하세요 '
        value={height}
        name='height'
        onChange={handleDogChange}
        label='키(cm)' />

      <Input
        placeholder='몸무게를 입력하세요 '
        value={weight}
        name='weight'
        onChange={handleDogChange}
        label='몸무게(kg)' />

      <Button name='비만도 확인 🐶' onClick={handleDogObesity} />

    </FormWrapper>);
}

export default DogPage;