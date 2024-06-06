import game from '../index.js';

const description =
  'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

function randomInteger(min, max) {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

const getQuestionAndAnswer = () => {
  const question = randomInteger(1, 9);
  const currecAnswer = isEven(question) ? 'yes' : 'no';

  return [question, currecAnswer];
};

export default () => {
  game(description, getQuestionAndAnswer);
};
