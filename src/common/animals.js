export const DOG = '강아지'
export const CAT = '고양이'

export const calculateBMI = (height, weight) => {
  const bmi = weight / (height / 100) ** 2
  return bmi.toFixed(2)
}