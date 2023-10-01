function countingSort(arr) {
  const n = arr.length;

  // Find the maximum value in the input array
  let max = arr[0];
  for (let i = 1; i < n; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  // Create a counting array to store the count of each element
  const count = new Array(max + 1).fill(0);

  // Count the occurrences of each element in the input array
  for (let i = 0; i < n; i++) {
    count[arr[i]]++;
  }

  // Reconstruct the sorted array from the counting array
  let outputIndex = 0;
  for (let i = 0; i <= max; i++) {
    while (count[i] > 0) {
      arr[outputIndex] = i;
      outputIndex++;
      count[i]--;
    }
  }

  return arr;
}

// Example usage:
const unsortedArray = [4, 2, 2, 8, 3, 3, 1];
const sortedArray = countingSort(unsortedArray);
console.log("Sorted Array (Counting Sort):", sortedArray);
