export function getRandomThrow(ranNum) {

    if (ranNum === 1) {

        return 'rock';

    } else if (ranNum === 2) {

        return 'paper';

    } else if (ranNum === 3) {

        return 'scissors';
    }

}

export function didUserWin(userChoice, computerChoice) {

    if (userChoice === computerChoice) {
        return 'draw';

    } else if (userChoice === 'rock' && computerChoice === 'scissors') {
        return 'win';

    } else if (userChoice === 'paper' && computerChoice === 'rock') {
        return 'win';

    } else if (userChoice === 'scissors' && computerChoice === 'paper') {
        return 'win';

    } else return 'lose';

}
