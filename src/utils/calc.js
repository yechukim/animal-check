export const calculateBMI = (height, weight) => {
  const bmi = weight / (height / 100) ** 2
  return bmi.toFixed(2)
}