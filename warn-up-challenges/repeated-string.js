// Lilah has a string, s, of lowercase English letters that she repeated infinitely many times.
// Given an integer, n, find and print the number of letter a's in the first  letters of Lilah's infinite string.
// For example, if the string s = 'abcac' and n=10, the substring we consider isabcacabcac , the first 10 characters of her infinite string. There are  4 occurrences of a in the substring.
// Function Description
// Complete the repeatedString function in the editor below. It should return an integer representing the number of occurrences of a in the prefix of length  in the infinitely repeating string.
// repeatedString has the following parameter(s):
// s: a string to repeat
// n: the number of characters to consider

function solution(s, n) {
  const l = s.length;
  const result = Math.floor(n / l);
  let word = '';

  word = s.replace(/a/g, '');

  const remaining = n - result * l;
  let result1 = (s.length - word.length) * result;

  for (let index = 0; index < remaining; index++) {
    if (s.charAt(index) === 'a') {
      result1++;
    }
  }
  return result1;
}

const word = 'aba';
const n = 10;
console.log(solution(word, n)); // 7

const word1 = 'abcac';
const n1 = 10;
console.log(solution(word1, n1)); // 4

const word2 = 'a';
const n2 = 1000000;
console.log(solution(word2, n2)); // 1000000
