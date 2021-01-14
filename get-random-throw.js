export function getRandomThrow() {

    const randomNumber = Math.round(Math.random() * 3);
    
    let computersThrow;

    if (randomNumber === 1) {

        computersThrow = 'rock';

    } else if (randomNumber === 2) {

        computersThrow = 'paper';

    } else if (randomNumber === 3) {

        computersThrow = 'scissors';
    }

    return computersThrow;

}

export function didUserWin(userChoice, computerChoice) {

    if (userChoice === 'rock' && computerChoice === 'rock') {
        return 'draw';

    } else if (userChoice === 'paper' && computerChoice === 'paper') {
        return 'draw';

    } else if (userChoice === 'scissors' && computerChoice === 'scissors') {
        return 'draw';

    } else if (userChoice === 'rock' && computerChoice === 'scissors') {
        return 'win';

    } else if (userChoice === 'paper' && computerChoice === 'rock') {
        return 'win';

    } else if (userChoice === 'scissors' && computerChoice === 'paper') {
        return 'win';

    } else if (userChoice === 'paper' && computerChoice === 'scissors') {
        return 'lose';
        
    } else if (userChoice === 'scissors' && computerChoice === 'rock') {
        return 'lose';

    } else if (userChoice === 'rock' && computerChoice === 'paper') {
        return 'lose';
    }
}
