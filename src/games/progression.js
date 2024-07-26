import game from '../index.js';
import randomInteger from './rnd.js';

const description = 'What number is missing in the progression?';
const lengthProgresssion = 10;

const getProgression = (firstElement, step) => {
  const arr = [];
  // const lengthProgresssion = 10;
  arr[0] = firstElement;
  for (let i = 0; i < lengthProgresssion - 1; i += 1) {
    arr[i + 1] = arr[i] + step;
  }
  return arr;
};

const getQuestionAndAnswer = () => {
  const beginInterval = 1;
  const endInterval = 5;
  const beginIntervalHidden = 0;
  const endIntervalHidden = lengthProgresssion - 1;

  const firstElement = randomInteger(beginInterval, endInterval * 6);
  const step = randomInteger(beginInterval, endInterval);

  const hiddenElement = randomInteger(beginIntervalHidden, endIntervalHidden);

  const progression = getProgression(firstElement, step);
  const currecAnswer = progression[hiddenElement];
  progression[hiddenElement] = '..';
  const question = progression.join(' ');

  return [question, currecAnswer.toString()];
};

export default () => {
  game(description, getQuestionAndAnswer);
};
