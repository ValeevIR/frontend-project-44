import game from '../index.js';

const description = 'What number is missing in the progression?';

const getProgression = (firstElement, step) => {
  const arr = [];
  arr[0] = firstElement;
  for (let i = 0; i < 9; i += 1) {
    arr[i + 1] = arr[i] + step;
  }
  return arr;
};

function randomInteger(min, max) {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

const getQuestionAndAnswer = () => {
  const firstElement = randomInteger(1, 30);
  const step = randomInteger(1, 5);
  const hiddenElement = randomInteger(0, 9);
  const progression = getProgression(firstElement, step);
  const currecAnswer = progression[hiddenElement];
  progression[hiddenElement] = '..';
  const question = progression.join(' ');

  return [question, currecAnswer.toString()];
};

export default () => {
  game(description, getQuestionAndAnswer);
};
