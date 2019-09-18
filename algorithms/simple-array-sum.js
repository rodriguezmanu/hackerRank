function simpleArraySum(ar) {
  return ar.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

console.log(simpleArraySum([1, 2, 3]));// 6
