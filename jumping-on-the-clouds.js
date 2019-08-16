// Emma is playing a new mobile game that starts with consecutively numbered clouds. Some of the clouds are thunderheads and others are cumulus. She can jump on any cumulus cloud having a number that is equal to the number of the current cloud plus  or . She must avoid the thunderheads. Determine the minimum number of jumps it will take Emma to jump from her starting postion to the last cloud. It is always possible to win the game.
// For each game, Emma will get an array of clouds numbered 0 if they are safe or  1if they must be avoided. For example, c=[0,1,0,0,0,1,0]  indexed from . The number on each cloud is its index in the list so she must avoid the clouds at indexes  and . She could follow the following two paths: 0-2-4-6 or 0-2-3-4-6 . The first path takes 3 jumps while the 4 second takes .
// Function Description
// Complete the jumpingOnClouds function in the editor below. It should return the minimum number of jumps required, as an integer.
// jumpingOnClouds has the following parameter(s):
// c: an array of binary integers
// Input Format
// The first line contains an integer , the total number of clouds. The second line contains  space-separated binary integers describing clouds  where .
// Constraints

// Output Format
// Print the minimum number of jumps needed to win the game.
// Sample Input 0
// 7
// 0 0 1 0 0 1 0

function solution(c) {
  let counter = 0;
  for (let index = 0; index < c.length; index++) {
    const itemNext1 = c[index + 1];
    const itemNext2 = c[index + 2];

    if (itemNext1 === 0 && itemNext2 === 1) {
      // jump 1
      counter++;
    }

    if (itemNext1 === 0 && itemNext2 === 0) {
      // jump 2
      index += 1;
      counter++;
    }

    if (itemNext1 === 1 && itemNext2 === 0) {
      index += 1;
      counter++;
      // jump 2
    }

    if (itemNext1 === 0 && itemNext2 === undefined) {
      // jump 1
      counter++;
    }
  }
  return counter;
}

const clouds = [0, 0, 1, 0, 0, 1, 0]; // 4
const clouds1 = [0, 0, 0, 0, 0, 1, 0]; // 3
const clouds2 = [0, 1, 0, 0, 0, 0, 0]; // 3
const clouds3 = [0, 0, 0, 1, 0, 0]; // 3

console.log(solution(clouds3));
