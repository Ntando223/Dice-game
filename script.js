console.log("Script loaded"); 

function rollDice() {
    const dice1 = document.getElementById('dice-1');
    const dice2 = document.getElementById('dice-2');
    const result1 = document.getElementById('result-1');
    const result2 = document.getElementById('result-2');
    const message = document.getElementById('message');

    const roll1 = Math.floor(Math.random() * 6) + 1;
    const roll2 = Math.floor(Math.random() * 6) + 1;

    console.log(`Rolled dice: ${roll1}, ${roll2}`); 

    dice1.style.backgroundImage = `url("images-/-dice ${roll1}.png")`;
    dice2.style.backgroundImage = `url("images-/-dice ${roll2}.png")`;

    result1.textContent = `Dice 1: ${roll1}`;
    result2.textContent = `Dice 2: ${roll2}`;
    if (roll1 === roll2) {
        message.textContent = "Congratulations! You win!";
    } else {
        message.textContent = "Try again!";
    }
}

const rollButton = document.getElementById('roll-btn');
rollButton.addEventListener('click', rollDice);
