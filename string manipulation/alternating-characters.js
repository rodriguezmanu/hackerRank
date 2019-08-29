// ching adjacent characters. To do this, you are allowed to delete zero or more characters in the string.

// Your task is to find the minimum number of required deletions.

// For example, given the string , remove an  at positions  and  to make  in  deletions.

// Function Description

// Complete the alternatingCharacters function in the editor below. It must return an integer representing the minimum number of deletions to make the alternating string.

// alternatingCharacters has the following parameter(s):

// s: a string
// Input Format

// The first line contains an integer , the number of queries.
// The next  lines each contain a string .

// Constraints

// Each string  will consist only of characters  and
// Output Format

// For each query, print the minimum number of deletions required on a new line.

// Sample Input

// 5
// AAAA
// BBBBB
// ABABABAB
// BABABA
// AAABBB
// Sample Output

// 3
// 4
// 0
// 0
// 4
// Explanation

// The characters marked red are the ones that can be deleted so that the string doesn't have matching consecutive characters.

function alternatingCharacters(s) {
  let counter = 0;

  for (let i = 0; i < s.length; i++) {
    const element = s[i];
    if (s[i] === s[i + 1]) {
      counter++;
    }
  }
  return counter;
}

console.log(alternatingCharacters('AAAA')); // 3
console.log(alternatingCharacters('BBBBB')); // 4
console.log(alternatingCharacters('ABABABAB')); // 0
console.log(alternatingCharacters('BABABA')); // 0
console.log(alternatingCharacters('AAABBB')); // 4
console.log(alternatingCharacters('AABAAB')); // 2
