import readlineSync from 'readline-sync';

const countRound = 3;

export default (description, getQuestionAnswer) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${name}!`);

  console.log(description);

  for (let i = 0; i < countRound; i += 1) {
    const [question, correctAnswer] = getQuestionAnswer();
    console.log(`Question: ${question}`);

    const answer = readlineSync.question('Your answer: ');

    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(
        // eslint-disable-next-line comma-dangle
        `${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.`
      );

      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
