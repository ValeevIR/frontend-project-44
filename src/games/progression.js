import game from '../index.js';
import randomInteger from './rnd.js';

const description = 'What number is missing in the progression?';
const progressionNumber = 10;

const getProgression = (firstElement, step) => {
  const arr = [];
  arr[0] = firstElement;
  for (let i = 0; i < progressionNumber - 1; i += 1) {
    arr[i + 1] = arr[i] + step;
  }
  return arr;
};

const getQuestionAndAnswer = () => {
  const beginInterval = 1;
  const endInterval = 5;
  const ratioIncrease = 6;
  const beginIntervalHidden = 0;
  const endIntervalHidden = progressionNumber - 1;

  const firstElement = randomInteger(beginInterval, endInterval * ratioIncrease);
  const step = randomInteger(beginInterval, endInterval);

  const hiddenElement = randomInteger(beginIntervalHidden, endIntervalHidden);

  const progression = getProgression(firstElement, step);
  const answer = progression[hiddenElement];
  progression[hiddenElement] = '..';
  const question = progression.join(' ');

  return [question, answer.toString()];
};

export default () => {
  game(description, getQuestionAndAnswer);
};
