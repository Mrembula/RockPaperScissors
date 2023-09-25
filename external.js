
// start playing when a hand-sign is pressed
let selectEl = document.querySelectorAll('.image-choice');
let resetGame = document.querySelector('.reset-modal');
let check = document.querySelector('.vs')
const handSign = ['rock', 'paper', 'scissor']
let removeEl;

let popUp = document.getElementById('message');
let changeColor = document.querySelector('body');
let transparentEl = document.querySelectorAll('.game-over');
let computerEl = document.getElementById('computer');
let userEl = document.getElementById('user');
let scoreEl = document.querySelector('#score');

let highScore = 0;
let count = 0;
let winner = 0;


// computer should return a random word from the 3 signs array
for (let i = 0; i < selectEl.length; i++) {


    selectEl[i].addEventListener('click', function () {
        let high_scoreEl = document.querySelector('#high-score');



        // Assign the computer to an image of the computer choice
        let computerChoice = handSign[Math.floor(Math.random() * handSign.length)];
        computerEl.src = `image/${computerChoice}.png`;
        document.querySelector('#computerText').textContent = `${computerChoice}`;
        count = count + 1;

        if(!(removeEl === undefined)) {
            let checkEl = document.querySelector(`#${removeEl}`);
            checkEl.classList.remove('click');
        }

        // Assign user to an image of user choice
        let userChoice = selectEl[i].id;
        userEl.src = `image/${userChoice}.png`;
        document.querySelector('#userText').textContent = `${userChoice}`;
        selectEl[i].classList.add('click')

        if (count < 5) {
            // Check who the winner is and comparing between the user and computer
            if (computerChoice === userChoice) {
                check.textContent = "It's a tie!";
                changeColor.style.backgroundColor = '#000000';
            } else {
                switch (userChoice) {
                    case 'paper':
                        if (userChoice === 'paper' && computerChoice === 'rock') {
                            check.textContent = "Paper covers Rock. You Win!"
                            changeColor.style.backgroundColor = '#008000';
                            winner++;
                        } else {
                            check.textContent = "Scissor cuts paper. You Lose!"
                            changeColor.style.backgroundColor = '#ff0000';
                        }
                        break;
                    case 'scissor':
                        if (userChoice === 'scissor' && computerChoice === 'paper') {
                            check.textContent = "Scissor cuts paper. You Win!"
                            changeColor.style.backgroundColor = '#008000';
                            winner++;
                        } else {
                            check.textContent = "Rock beats Scissor. You Lose!";
                            changeColor.style.backgroundColor = '#ff0000';
                        }
                        break;
                    case 'rock':
                        if (userChoice === 'rock' && computerChoice === 'scissor') {
                            check.textContent = "Rock beats Scissor. You Win!"
                            changeColor.style.backgroundColor = '#008000';
                            winner++;
                        } else {
                            check.textContent = "Paper covers Rock. You Lose!"
                            changeColor.style.backgroundColor = '#ff0000'
                        }
                }
            }
        }
        else {

            for(let j = 0; j < transparentEl.length; j++) {
                transparentEl[j].classList.add('overlay');
            }

            popUp.classList.remove('hidden');
            popUp.classList.add('active');
        }
        removeEl = selectEl[i].id;
        scoreEl.textContent = `${winner}`;
        if (highScore < winner) {
            highScore = winner;
            high_scoreEl.textContent = `${highScore}`;
        }
    })
}

resetGame.addEventListener('click', function (){
    changeColor.style.backgroundColor = '#000000';
    let imagesEl = document.querySelectorAll('.player');
    for (let i = 0; i < transparentEl.length; i++) {
        transparentEl[i].classList.remove('overlay');
    }

    for (let j = 0; j < selectEl.length; j++) {
        selectEl[j].classList.remove('click');
    }

    for (let i = 0; i < imagesEl.length; i++) {
        imagesEl[i].src = "image/plain_black.png";
    }
    check.textContent = "vs";
    popUp.classList.remove('active');
    popUp.classList.add('hidden');

    count = 0;
    winner = 0;
    scoreEl.textContent = `${winner}`;
})
