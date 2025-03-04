function flipCoin() {
    return Math.random() < 0.5 ? "Heads" : "Tails";
}

let headsCount = 0;
let tailsCount = 0;

console.log("Flipping the coin... First to reach 11 wins!");

while (headsCount < 11 && tailsCount < 11) {
    let result = flipCoin();
    
    if (result === "Heads") {
        headsCount++;
    } else {
        tailsCount++;
    }

    console.log(`${result}! (Heads: ${headsCount}, Tails: ${tailsCount})`);
}

console.log(`Game Over! ${headsCount === 11 ? "Heads" : "Tails"} wins!`);
