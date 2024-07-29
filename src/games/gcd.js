import game from '../index.js';
import randomInteger from './rnd.js';

const description = 'Find the greatest common divisor of given numbers.';

const gcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
};

const getQuestionAndAnswer = () => {
  const beginInterval = 1;
  const endInterval = 30;

  const num1 = randomInteger(beginInterval, endInterval);
  const num2 = randomInteger(beginInterval, endInterval);
  const question = `${num1} ${num2}`;
  const answer = gcd(num1, num2);

  return [question, answer.toString()];
};

export default () => {
  game(description, getQuestionAndAnswer);
};
