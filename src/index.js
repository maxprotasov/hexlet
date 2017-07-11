
import readlineSync from 'readline-sync';

const welcome = () => {
  console.log('Welcome to the Brain games!');
  console.log('Answer "yes" if number even otherwise answer "no".');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello ${name}`);
  const getRandomInt = () => Math.floor(Math.random() * 100);
  let i = 3;

  while (i) {
    const int = getRandomInt();
    console.log(int);
    const numLog = readlineSync.question('Your answer:');

    if (int % 2 === 0 && numLog === 'yes') {
      console.log('Correct!');
      i--;
    } else if (int % 2 !== 0 && numLog === 'no') {
      console.log('Correct!');
      i--;
    } else {
      console.log(`Let's try again, ${name}!`);
      i = 3;
    }
  }
  return console.log(`Congratulations, ${name}!`);
};

export default welcome;
