import game from '../index.js';
import randomInteger from './rnd.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const getQuestionAndAnswer = () => {
  const beginInterval = 1;
  const endInterval = 9;

  const question = randomInteger(beginInterval, endInterval);
  const answer = isEven(question) ? 'yes' : 'no';

  return [question, answer];
};

export default () => {
  game(description, getQuestionAndAnswer);
};
