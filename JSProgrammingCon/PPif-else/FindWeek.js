function getWeekDay(num) {
    if (num === 1) return "Sunday";
    else if (num === 2) return "Monday";
    else if (num === 3) return "Tuesday";
    else if (num === 4) return "Wednesday";
    else if (num === 5) return "Thursday";
    else if (num === 6) return "Friday";
    else if (num === 7) return "Saturday";
    else return "Invalid input. Please enter a number between 1 and 7.";
}


const args = process.argv.slice(2);
const num = parseInt(args[0], 10);


if (isNaN(num) || num < 1 || num > 7) {
    console.log("Invalid input. Please enter a number between 1 and 7.");
} else {
    console.log(getWeekDay(num));
}
