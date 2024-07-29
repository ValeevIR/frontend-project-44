import game from '../index.js';
import randomInteger from './rnd.js';

const description = 'What is the result of the expression?';

const action = ['+', '-', '*'];

const expression = (a, b, operation) => {
  switch (operation) {
    case '+':
      return (a + b).toString();
    case '-':
      return (a - b).toString();
    case '*':
      return (a * b).toString();
    default:
      throw new Error(`Unknown operation: '${operation}'!`);
  }
};

const getQuestionAndAnswer = () => {
  const beginIntervalNum = 1;
  const endIntervalNum = 30;
  const beginIntervalOperation = 0;
  const endIntervalOperation = 2;

  const num1 = randomInteger(beginIntervalNum, endIntervalNum);
  const num2 = randomInteger(beginIntervalNum, endIntervalNum);
  const operation = randomInteger(beginIntervalOperation, endIntervalOperation);
  const question = `${num1} ${action[operation]} ${num2}`;
  return [question, expression(num1, num2, action[operation])];
};

export default () => {
  game(description, getQuestionAndAnswer);
};
