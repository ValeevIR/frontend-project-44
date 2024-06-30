import readlineSync from 'readline-sync';

const countRound = 3;

export default (description, getQuestionAnswer) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${name}!`);

  console.log(description);

  for (let i = 0; i < countRound; i += 1) {
    const [question, currecAnswer] = getQuestionAnswer();
    console.log(`Question: ${question}`); // 15

    const answer = readlineSync.question('Your answer: '); // no

    if (answer === currecAnswer) {
      console.log('Correct!');
    } else {
      console.log(
        // eslint-disable-next-line comma-dangle
        `${answer} is wrong answer ;(. Correct answer was ${currecAnswer}.`
      );

      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulation, ${name}!`);
};
