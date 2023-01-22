let randomNumber = Math.floor(Math.random() * 100) + 1;
//let randomNumber2 = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber);

const max = 100;
const min = 1;
let startTime, endTime;
let seconds;
let timeDiff;


const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const total = document.querySelector('.total')
const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');



let guessCount = 1;
let resetButton;


checkGuess = () => {
  const userGuess = Number(guessField.value);

  startTime = new Date();
  if (guessCount === 1) {
    guesses.textContent = 'Previous guesses: ';
  }
  guesses.textContent += `${userGuess} `;

  endTime = new Date();

  if (userGuess === randomNumber) {
    total.textContent = (`Total guess times: ${guessCount}`);
    console.log(guessCount);
    timeDiff = endTime - startTime;
    timeDiff /= 1000;
    seconds = Math.round(timeDiff);
    console.log(seconds + " seconds");
    lastResult.textContent = 'Congratulations! You got it right!';
    lastResult.style.backgroundColor = 'green';
    lowOrHi.textContent = '';
   // setGameOver();
  } else if (guessCount === 10) {
    lastResult.textContent = '!!!GAME OVERR!!';
    lowOrHi.textContent = '';

   // setGameOver();
  } else {
    lastResult.textContent = 'Wrong!';
    lastResult.style.backgroundColor = 'red';
    if (userGuess < randomNumber) {
      lowOrHi.textContent = 'Last guess was too low!';
    } else if (userGuess > randomNumber) {
      lowOrHi.textContent = 'Last guess was too high!';
    }
  }

  guessCount++;
  guessField.value = '';
  guessField.focus();
}

guessSubmit.addEventListener('click', checkGuess);


//ALGORITHM LOOP
// Will submit new number everytime and after guessing the right number it will stop
//

while (true) {
  let randomNumber2 = Math.floor(Math.random() * 100) + 1;
  document.getElementById("guessField").value = randomNumber2;
  checkGuess();
  if (randomNumber2 === randomNumber) {
    console.log("Correct number guessed");
    break;
  }
}






setGameOver = () => {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement('button');
  resetButton.textContent = 'Start new game';
  document.body.append(resetButton);
  resetButton.addEventListener('click', resetGame);
}

resetGame = () => {
  guessCount = 1;

  const resetParas = document.querySelectorAll('.resultParas p');
  for (const resetPara of resetParas) {
    resetPara.textContent = '';
  }

  resetButton.parentNode.removeChild(resetButton);

  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = '';
  guessField.focus();

  lastResult.style.backgroundColor = 'white';

  randomNumber = Math.floor(Math.random() * max) + min;
}


