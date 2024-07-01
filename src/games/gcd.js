import game from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const gcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
};

function randomInteger(min, max) {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

const getQuestionAndAnswer = () => {
  const num1 = randomInteger(1, 30);
  const num2 = randomInteger(1, 30);
  const question = `${num1} ${num2}`;
  const currecAnswer = gcd(num1, num2);

  return [question, currecAnswer.toString()];
};

export default () => {
  game(description, getQuestionAndAnswer);
};
