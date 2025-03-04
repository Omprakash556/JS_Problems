function isPalindrome(num) {
    let strNum = num.toString();
    return strNum === strNum.split('').reverse().join('');
}

function checkTwoPalindromes(num1, num2) {
    if (isPalindrome(num1) && isPalindrome(num2)) {
        console.log(`${num1} and ${num2} are both palindromes.`);
    } else {
        console.log(`${num1} and ${num2} are NOT both palindromes.`);
    }
}

checkTwoPalindromes(121, 232);
checkTwoPalindromes(123, 321);