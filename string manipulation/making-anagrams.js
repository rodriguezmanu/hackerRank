// Alice is taking a cryptography class and finding anagrams to be very useful. We consider two strings to be anagrams of each other if the first string's letters can be rearranged to form the second string. In other words, both strings must contain the same exact letters in the same exact frequency For example, bacdc and dcbac are anagrams, but bacdc and dcbad are not.

// Alice decides on an encryption scheme involving two large strings where encryption is dependent on the minimum number of character deletions required to make the two strings anagrams. Can you help her find this number?

// Given two strings,  and , that may or may not be of the same length, determine the minimum number of character deletions required to make  and  anagrams. Any characters can be deleted from either of the strings.

// For example, if  and , we can delete  from string  and  from string  so that both remaining strings are and  which are anagrams.

// Function Description

// Complete the makeAnagram function in the editor below. It must return an integer representing the minimum total characters that must be deleted to make the strings anagrams.

// makeAnagram has the following parameter(s):

// a: a string
// b: a string
// Input Format

// The first line contains a single string, .
// The second line contains a single string, .

// Constraints

// The strings  and  consist of lowercase English alphabetic letters ascii[a-z].
// Output Format

// Print a single integer denoting the number of characters you must delete to make the two strings anagrams of each other.

// Sample Input

// cde
// abc
// Sample Output

// 4
// Explanation

// We delete the following characters from our two strings to turn them into anagrams of each other:

// Remove d and e from cde to get c.
// Remove a and b from abc to get c.
// We must delete  characters to make both strings anagrams, so we print  on a new line.

function makeAnagram(a, b) {
  let count = 0;
  a = a.split('');
  b = b.split('');
  const total = a.length + b.length;

  for (let i = 0; i < a.length; i++) {
    if (b.includes(a[i])) {
      const index = b.findIndex(item => item === a[i]);
      b.splice(index, 1);
      count++;
    }
  }
  return total - 2 * count;
}

console.log(makeAnagram('cde', 'dfc')); // 2
console.log(makeAnagram('cde', 'abc')); // 4
console.log(makeAnagram('fcrxzwscanmligyxyvym', 'jxwtrhvujlmrpdoqbisbwhmgpmeoke')); // 30
console.log(makeAnagram('showman', 'woman')); // 2
