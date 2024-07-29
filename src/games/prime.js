import game from '../index.js';
import randomInteger from './rnd.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const getQuestionAndAnswer = () => {
  const beginInterval = 1;
  const endInterval = 100;

  const question = randomInteger(beginInterval, endInterval);
  const answer = isPrime(question) ? 'yes' : 'no';

  return [question, answer];
};

export default () => {
  game(description, getQuestionAndAnswer);
};
