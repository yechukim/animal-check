import { useState } from "react";
import { calculateBMI } from "../utils/calc";
import Button from "./Button";
import FormWrapper from "./FormWrapper";
import Input from "./Input";
import { getAnimalEmoji } from "../utils/calc";

function BMIForm({ type, height, weight, handleChange }) {

  const [result, setResult] = useState('')

  const handleBMI = (height, weight, e) => {
    if (!height || !weight) return alert('키와 몸무게를 입력하세요 ')
    if (isNaN(height) || isNaN(weight) ||
      typeof parseFloat(height) !== 'number' ||
      typeof parseFloat(weight) !== 'number') return alert('숫자를 입력하세요 ')

    const bmi = calculateBMI(height, weight)
    setResult(bmi)

  }
  return (
    <FormWrapper>
      <Input
        placeholder='키를 입력하세요 '
        value={height}
        name='height'
        onChange={handleChange}
        label='키(cm)' />

      <Input
        placeholder='몸무게를 입력하세요 '
        value={weight}
        name='weight'
        onChange={handleChange}
        label='몸무게(kg)' />

      <Button name={`비만도 확인 ${getAnimalEmoji(type)}`}
        onClick={(e) => handleBMI(height, weight, e)} />
      {result &&
        <p>비만도는 {result} 입니다 </p>}
    </FormWrapper>

  );
}

export default BMIForm;