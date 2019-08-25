function palindrome(str) {
  const len = str.length;
  const re = /[^A-Za-z0-9]/g;

  str = str.toLowerCase().replace(re, '');

  for (let i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - 1 - i]) {
      return false;
    }
  }
  return true;
}

console.log(palindrome('An111na')); // true
console.log(palindrome('abb')); // false
