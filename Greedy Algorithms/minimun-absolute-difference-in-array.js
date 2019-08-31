// Consider an array of integers, . We define the absolute difference between two elements,  and  (where ), to be the absolute value of .

// Given an array of integers, find and print the minimum absolute difference between any two elements in the array. For example, given the array  we can create  pairs of numbers:  and . The absolute differences for these pairs are ,  and . The minimum absolute difference is .

// Function Description

// Complete the minimumAbsoluteDifference function in the editor below. It should return an integer that represents the minimum absolute difference between any pair of elements.

// minimumAbsoluteDifference has the following parameter(s):

// n: an integer that represents the length of arr
// arr: an array of integers
// Input Format

// The first line contains a single integer , the size of .
// The second line contains  space-separated integers .

// Constraints

// Output Format

// Print the minimum absolute difference between any two elements in the array.

// Sample Input 0

// 3
// 3 -7 0
// Sample Output 0

// 3
// Explanation 0

// With  integers in our array, we have three possible pairs: , , and . The absolute values of the differences between these pairs are as follows:

// Notice that if we were to switch the order of the numbers in these pairs, the resulting absolute values would still be the same. The smallest of these possible absolute differences is .

// Sample Input 1

// 10
// -59 -36 -13 1 -53 -92 -2 -96 -54 75
// Sample Output 1

// 1
// Explanation 1

// The smallest absolute difference is .

// Sample Input 2

// 5
// 1 -3 71 68 17
// Sample Output 2

// 3
// Explanation 2

// The minimum absolute difference is .

function minimumAbsoluteDifferenceNotGoodPerformace(arr) {
  let result = 0;
  let min = Number.MAX_VALUE;

  for (let i = 0; i < arr.length; i++) {
    const elementI = arr[i];

    for (let j = i; j < arr.length; j++) {
      const elementJ = arr[j];
      if (elementI !== elementJ) {
        result = Math.abs(elementI - elementJ);
        if (result < min) {
          min = result;
        }
        if (min === 0) {
          return 0;
        }
      }
    }
  }
  return min;
}

function minimumAbsoluteDifference(arr) {
  arr.sort();
  let min = Number.MAX_VALUE;

  for (let i = 0; i < arr.length - 1; i++) {
    console.log(arr[i], arr[i + 1]);

    const result = Math.abs(arr[i + 1] - arr[i]);
    if (result < min) {
      min = result;
    }
    if (min === 0) {
      return 0;
    }
  }
  return min;
}

console.log(minimumAbsoluteDifference([-2, 2, 4]));// 2
console.log(minimumAbsoluteDifference([1, 2, 3])); // 1
console.log(minimumAbsoluteDifference([3, -7, 0]));//3
console.log(minimumAbsoluteDifference([-59 ,-36 ,-13, 1, -53, -92, -2, -96, -54, 75]));// 1
console.log(minimumAbsoluteDifference([1 ,-3 ,71 ,68 ,17])); // 3
