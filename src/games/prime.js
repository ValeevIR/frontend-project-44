import game from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

function randomInteger(min, max) {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

const getQuestionAndAnswer = () => {
  const question = randomInteger(1, 100);
  const currecAnswer = isPrime(question) ? 'yes' : 'no';

  return [question, currecAnswer];
};

export default () => {
  game(description, getQuestionAndAnswer);
};
