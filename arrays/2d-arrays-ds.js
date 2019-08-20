// Given a  2D Array, :
// 1 1 1 0 0 0
// 0 1 0 0 0 0
// 1 1 1 0 0 0
// 0 0 0 0 0 0
// 0 0 0 0 0 0
// 0 0 0 0 0 0
// We define an hourglass in  to be a subset of values with indices falling in this pattern in 's graphical representation:
// a b c
//   d
// e f g
// There are  hourglasses in , and an hourglass sum is the sum of an hourglass' values. Calculate the hourglass sum for every hourglass in , then print the maximum hourglass sum.
// For example, given the 2D array:
// -9 -9 -9  1 1 1
//  0 -9  0  4 3 2
// -9 -9 -9  1 2 3
//  0  0  8  6 6 0
//  0  0  0 -2 0 0
//  0  0  1  2 4 0
// We calculate the following  hourglass values:
// -63, -34, -9, 12,
// -10, 0, 28, 23,
// -27, -11, -2, 10,
// 9, 17, 25, 18
// Our highest hourglass value is  from the hourglass:
// 0 4 3
//   1
// 8 6 6
// Note: If you have already solved the Java domain's Java 2D Array challenge, you may wish to skip this challenge.
// Function Description
// Complete the function hourglassSum in the editor below. It should return an integer, the maximum hourglass sum in the array.
// hourglassSum has the following parameter(s):
// arr: an array of integers


function solution(arr) {
  let counter = 0;
  let max = Number.NEGATIVE_INFINITY;

  for (let i = 0; i < arr.length; i++) {
    const elementI = arr[i];

    for (let j = 0; j < elementI.length; j++) {
      if (arr[i][j + 2] !== undefined && arr[i + 2] !== undefined && arr[i + 2][j] !== undefined) {
        counter += arr[i][j];
        counter += arr[i][j + 1];
        counter += arr[i][j + 2];

        counter += arr[i + 1][j + 1];

        counter += arr[i + 2][j];
        counter += arr[i + 2][j + 1];
        counter += arr[i + 2][j + 2];

        if (counter >= max) {
          max = counter;
        }
        counter = 0;
      }
    }
  }

  return max;
}

const aa = [
[1, 1, 1, 0, 0, 0],
[0, 1, 0, 0, 0, 0],
[1, 1, 1, 0, 0, 0],
[0, 0, 2, 4, 4, 0],
[0, 0, 0, 2, 0, 0],
[0, 0, 1, 2, 4, 0]
];//19

const bb = [
  [-1, -1, 0, -9, -2, -2],
[-2, -1, -6, -8, -2, -5],
[-1, -1, -1, -2, -3, -4],
[-1, -9, -2, -4, -4, -5],
[-7, -3, -3, -2, -9, -9],
[-1, -3, -1, -2, -4, -5]
]
const result = solution(aa);//-6

console.log(result);
