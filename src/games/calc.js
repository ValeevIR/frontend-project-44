import game from '../index.js';

const description = 'What is the result of the expression?';

const action = ['+', '-', '*'];

function randomInteger(min, max) {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

const getQuestionAndAnswer = () => {
  let currecAnswer = 0;
  const num1 = randomInteger(1, 30);
  const num2 = randomInteger(1, 30);
  const operation = randomInteger(0, 2);
  const question = `${num1} ${action[operation]} ${num2}`;
  switch (action[operation]) {
    case '+':
      currecAnswer = num1 + num2;
      break;
    case '-':
      currecAnswer = num1 - num2;
      break;
    case '*':
      currecAnswer = num1 * num2;
      break;
    default:
  }

  return [question, currecAnswer.toString()];
};

export default () => {
  game(description, getQuestionAndAnswer);
};
