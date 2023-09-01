let hand_sign = ['rock', 'paper', 'scissor']

function get_computer() {
    // Function takes in no parameter
    // Function selects random string from the hand sign array and return the computer random answer

    let choice = hand_sign[Math.floor(Math.random() * hand_sign.length)]
    console.log("computer", choice)
    return choice
}

function player_input() {
    let count
    // Function takes parameter of player choice, if function does not exist
    // player will be re-prompted to enter the right hand sign

    do {
        count = 0
        player_choice = prompt("Enter a hand sign")
        player_choice = player_choice.toLocaleLowerCase()
        for(let i = 0; i < hand_sign.length; i++) {
            if(player_choice === hand_sign[i]) {
                count = 1
            }
        }
    }
    while (count === 0)

    return player_choice
}

function single_round() {
    // function takes player and computer parameter
    // function compares player and computer to check who the winner is
    let player = player_input()
    let computer = get_computer()

    if(player === computer) {
        return "It's a tie!"
    }
    else {
        switch (player) {
            case 'paper':
                if (player === 'paper' && computer === 'rock') {
                    return "Paper covers Rock. You Win!"
                } else {
                    return "Scissor cuts paper. You Lose!"
                }
            case 'scissor':
                if (player === "scissor" && computer === 'paper') {
                    return "Scissor cuts paper. You Win!"
                } else {
                    return "Rock beats Scissor. You Lose!"
                }
            case 'rock':
                if (player === "rock" && computer === 'scissor') {
                    return "Rock beats Scissor. You Win!"
                } else {
                    return "Paper covers Rock. You Lose!"
                }
        }
    }
}

function game() {
    // the game plays five times

    for(let i = 1; i <= 5; i++) {
        console.log(single_round())
    }
}

game()