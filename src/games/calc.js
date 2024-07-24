import game from '../index.js';

const description = 'What is the result of the expression?';

const action = ['+', '-', '*'];

function randomInteger(min, max) {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

const getQuestionAndAnswer = () => {
  const num1 = randomInteger(1, 30);
  const num2 = randomInteger(1, 30);
  const operation = randomInteger(0, 2);
  const question = `${num1} ${action[operation]} ${num2}`;
  switch (action[operation]) {
    case '+':
      return [question, (num1 + num2).toString()];
    case '-':
      return [question, (num1 - num2).toString()];
    case '*':
      return [question, (num1 * num2).toString()];
    default:
      throw new Error(`Unknown operation: '${action[operation]}'!`);
  }
};

export default () => {
  game(description, getQuestionAndAnswer);
};
