
// not 100% - in progress

function substrCount(n, s) {
  const substring = getAllSubstrings(s);
  let counter = 0;
  const a = []

  for (let index = 0; index < substring.length; index++) {
    const element = substring[index];

    if (palindrome(element)) {
      counter++;
      a.push(element)
    }
  }

  for (let index = 0; index < a.length; index++) {
    const element = a[index];
    console.log(element.length)
    if(element.length%2 !== 0 && element.length>1){
      element
      if(palindrome2(element)) {
        counter--;
      }
    }
  }
  return counter;
}

function getAllSubstrings(word) {
  const arr = [];
  for (let i = 0; i < word.length; i++) {
    for (let j = i + 1; j < word.length + 1; j++) {
      arr.push(word.slice(i, j));
    }
  }
  return arr;
}

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

function palindrome2(str) {
  const len = str.length;
  for (let i = 0; i < len/2; i++) {
    const a = Math.floor(len/2+i+1);

    if (str[i] !== str[a] && str[a] !== undefined) {
      return true;
    }
  }
  return false;
}
