import { getRandomThrow, didUserWin } from './get-random-throw.js';

const currentThrow = document.getElementById('current-throw');
const winSpan = document.getElementById('win');
const loseSpan = document.getElementById('lose');
const drawsSpan = document.getElementById('draw');
const totalSpan = document.getElementById('total');
const guessButton = document.getElementById('guess-button');


// initialize state

let wins = 0;
let loses = 0;
let draws = 0;
let total = 0;

// set event listeners to update state and DOM

guessButton.addEventListener('click', () => {
    total++;
    totalSpan.textContent = total;

    const computersChoice = getRandomThrow();
    const radioButton = document.getElementById('input[type="radio"]:checked');
    const usersChoice = radioButton.value;
    const result = didUserWin(usersChoice, computersChoice);

    if (result === 'win') {
        wins++;
        currentThrow.textContent = 'You win!';
        winSpan.textContent = wins;
    } else if (result === 'lose') {
        loses++;
        currentThrow.textContent = 'You lost!';
        loseSpan.textContent = loses;
    } else {
        draws++;
        currentThrow.textContent = 'Its a draw';
        drawsSpan.textContent = draws;
    }

});