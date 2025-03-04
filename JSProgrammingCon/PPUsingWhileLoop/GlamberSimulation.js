function gamble() {
    let money = 100;  // Starting money
    let goal = 200;   // Target money
    let bets = 0;     // Total bets made
    let wins = 0;     // Number of times won

    console.log("Gambler starts with Rs. 100 and plays until broke or reaches Rs. 200.");

    while (money > 0 && money < goal) {
        bets++;  // Increment bet count

        // Simulate a bet (50% chance to win or lose)
        if (Math.random() < 0.5) {
            money++;  // Win Rs. 1
            wins++;
        } else {
            money--;  // Lose Rs. 1
        }

        console.log(`Bet ${bets}: ${money >= goal ? "Goal Reached!" : money === 0 ? "Broke!" : "Money left: Rs. " + money}`);
    }

    console.log("\nGame Over!");
    console.log(`Total Bets Made: ${bets}`);
    console.log(`Total Wins: ${wins}`);
    console.log(money === goal ? "Gambler reached the goal of Rs. 200! 🎉" : "Gambler is broke! 💸");
}

// Start the gambling simulationgamble();
