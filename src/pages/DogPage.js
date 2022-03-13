import { useState } from "react";
import { calculateBMI } from "../common/animals";
import Button from "../components/Button";
import FormWrapper from "../components/FormWrapper";
import Input from "../components/Input";

function DogPage() {
  const [height, setHeight] = useState('')
  const [weight, setWeight] = useState('')
  const [result, setResult] = useState('')
  const handleDogChange = (e) => {
    const { name, value } = e.target
    if (name === 'height') {
      setHeight(value)
    } else {
      setWeight(value)
    }
  }
  const handleDogObesity = (height, weight) => {
    const bmi = calculateBMI(height, weight)
    setResult(bmi)
    setHeight('')
    setWeight('')
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

      <Button name='비만도 확인 🐶' onClick={() => handleDogObesity(height, weight)} />
      {result &&
        <p>비만도는 {result} 입니다 </p>}
    </FormWrapper>);
}

export default DogPage;