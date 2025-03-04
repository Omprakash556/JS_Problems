function findTriplets(arr) {
    let triplets = [];
    let n = arr.length;

    // Sort the array to use the two-pointer technique
    arr.sort((a, b) => a - b);

    for (let i = 0; i < n - 2; i++) {
        // Skip duplicate elements
        if (i > 0 && arr[i] === arr[i - 1]) continue;

        let left = i + 1, right = n - 1;

        while (left < right) {
            let sum = arr[i] + arr[left] + arr[right];

            if (sum === 0) {
                triplets.push([arr[i], arr[left], arr[right]]);
                
                // Move pointers and avoid duplicates
                while (left < right && arr[left] === arr[left + 1]) left++;
                while (left < right && arr[right] === arr[right - 1]) right--;

                left++;
                right--;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }

    return triplets;
}

// Example usage
let numbers = [-1, 0, 1, 2, -1, -4];
let result = findTriplets(numbers);

console.log("Triplets that sum to zero:", result.length > 0 ? result : "No triplets found");
