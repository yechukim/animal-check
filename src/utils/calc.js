import { DOG, CAT, MIN_SPRINKLE, MAX_SPRINKLE } from "../constants"

export const calculateBMI = (height, weight) => {
  const bmi = weight / (height / 100) ** 2
  return bmi.toFixed(2)
}

export const getAnimalEmoji = (name) => {
  if (name === DOG) return '🐶'
  if (name === CAT) return '🐱'
  return '🙈'
}

export const generateSprinkles = (emoji) => {
  let emojiArrays = []
  const sprinkleCount = Math.floor(Math.random() * (MAX_SPRINKLE - MIN_SPRINKLE) + MIN_SPRINKLE)
  for (let i = 0; i < sprinkleCount; i++) {
    emojiArrays.push(emoji)
  }
}
