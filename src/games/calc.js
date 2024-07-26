import game from '../index.js';
import randomInteger from './rnd.js';

const description = 'What is the result of the expression?';

const action = ['+', '-', '*'];

const getQuestionAndAnswer = () => {
  const beginIntervalNum = 1;
  const endIntervalNum = 30;
  const beginIntervalOperation = 0;
  const EndIntervalOperation = 2;

  const num1 = randomInteger(beginIntervalNum, endIntervalNum);
  const num2 = randomInteger(beginIntervalNum, endIntervalNum);
  const operation = randomInteger(beginIntervalOperation, EndIntervalOperation);
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
