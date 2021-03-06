'use strict';

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}

// Again button

document.querySelector('.again').addEventListener('click', function () {

    score = 20;

    document.querySelector('.score').textContent = score;
    document.querySelector('.message').textContent = `Start guessing..`;
    document.querySelector('.number').textContent = "?";
    document.querySelector('.guess').value = null;

    document.querySelector('.number').style.width = '15rem';
    document.querySelector('body').style.backgroundColor = "#222";
});



document.querySelector('.check').addEventListener('click', function () {

    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);


    //When there is no input
    if (!guess) {
        displayMessage(`🤦‍♂ No Number !`);

        //When player wins
    } else if (guess === secretNumber) {
        displayMessage(`🎉 Correct Answer`);

        //we use camelCase to writeoff css styles in js and the value should always be a string
        // for using styles in js = className.style.style-property
        //inLine Style-directly is going to apply to html

        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = secretNumber;

        //HighScore
        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }

        // guess is not equal to secretNumber (Refracting the code)
    } else if (guess !== secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = guess > secretNumber ? `☝ Guess is too high` :
                document.querySelector('.message').textContent = `👇 Guess is too low`;
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = `🐱‍👤Game Over`;
            document.querySelector('.score').textContent = 0;
        }
    }
    // //When the guess is too high 
    // else if (guess > secretNumber) {
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = `☝ Guess is too high`;
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent = `🐱‍👤Game Over`;
    //         document.querySelector('.score').textContent = 0;
    //     }

    //     //When the guess is too low
    // } else if (guess < secretNumber) {
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = `👇 Guess is too low`;
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent = `🐱‍👤 Game Over`;
    //         document.querySelector('.score').textContent = 0;
    //     }

    // }
    console.log(score);
    // document.querySelector('.score').textContent = score;
});