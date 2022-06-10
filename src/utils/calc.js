import { DOG, CAT } from '../constants';

export const calculateBMI = (height, weight) => {
	const bmi = weight / (height / 100) ** 2;
	return bmi.toFixed(2);
};

export const getAnimalEmoji = (name) => {
	if (name === DOG) return '🐶';
	if (name === CAT) return '🐱';
	return '🙈';
};
