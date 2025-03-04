// Function to generate 10 random 3-digit numbers
function generateRandomNumbers(count) {
    let numbers = [];
    for (let i = 0; i < count; i++) {
        numbers.push(Math.floor(Math.random() * 900) + 100); // 100 to 999
    }
    return numbers;
}

// Function to sort the array and find the 2nd largest & 2nd smallest
function findSecondLargestAndSmallestSorted(arr) {
    arr.sort((a, b) => a - b); // Sorting in ascending order
    console.log("Sorted Numbers:", arr);

    let secondSmallest = arr[1];
    let secondLargest = arr[arr.length - 2];

    return { secondLargest, secondSmallest };
}

// Main Execution
let numbers = generateRandomNumbers(10);
console.log("Generated Numbers:", numbers);

let { secondLargest, secondSmallest } = findSecondLargestAndSmallestSorted(numbers);
console.log("2nd Smallest Number:", secondSmallest);
console.log("2nd Largest Number:", secondLargest);
