function getRandomThreeDigit() {
    return Math.floor(100 + Math.random() * 900);
}

let num1 = getRandomThreeDigit();
let num2 = getRandomThreeDigit();
let num3 = getRandomThreeDigit();
let num4 = getRandomThreeDigit();
let num5 = getRandomThreeDigit();

console.log("Generated numbers:", num1, num2, num3, num4, num5);

let min = num1;
let max = num1;

if (num2 < min) min = num2;
if (num3 < min) min = num3;
if (num4 < min) min = num4;
if (num5 < min) min = num5;

if (num2 > max) max = num2;
if (num3 > max) max = num3;
if (num4 > max) max = num4;
if (num5 > max) max = num5;


console.log("Minimum value:", min);
console.log("Maximum value:", max);
