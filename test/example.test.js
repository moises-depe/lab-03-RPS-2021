// IMPORT MODULES under test here:
import { getRandomThrow } from '../get-random-throw';

const test = QUnit.test;

test('if one is entered then the result will be rock', (expect) => {
    const expected = 'rock';
    
    const actual = getRandomThrow(1);

    expect.equal(actual, expected);
});

test('if 2 then paper', (expect) => {
    const expected = 'paper';
    
    const actual = getRandomThrow(2);

    expect.equal(actual, expected);
});

test('if 3 then scissors', (expect) => {
    const expected = 'scissors';
    
    const actual = getRandomThrow(3);

    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});