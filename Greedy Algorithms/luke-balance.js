// Lena is preparing for an important coding competition that is preceded by a number of sequential preliminary contests. Initially, her luck balance is 0. She believes in "saving luck", and wants to check her theory. Each contest is described by two integers,  and :

//  is the amount of luck associated with a contest. If Lena wins the contest, her luck balance will decrease by ; if she loses it, her luck balance will increase by .
//  denotes the contest's importance rating. It's equal to  if the contest is important, and it's equal to  if it's unimportant.
// If Lena loses no more than  important contests, what is the maximum amount of luck she can have after competing in all the preliminary contests? This value may be negative.

// For example,  and:

// Contest		L[i]	T[i]
// 1		5	1
// 2		1	1
// 3		4	0
// If Lena loses all of the contests, her will be . Since she is allowed to lose  important contests, and there are only  important contests. She can lose all three contests to maximize her luck at . If , she has to win at least  of the important contests. She would choose to win the lowest value important contest worth . Her final luck will be .

// Function Description

// Complete the luckBalance function in the editor below. It should return an integer that represents the maximum luck balance achievable.

// luckBalance has the following parameter(s):

// k: the number of important contests Lena can lose
// contests: a 2D array of integers where each  contains two integers that represent the luck balance and importance of the  contest.
// Input Format

// The first line contains two space-separated integers  and , the number of preliminary contests and the maximum number of important contests Lena can lose.
// Each of the next  lines contains two space-separated integers,  and , the contest's luck balance and its importance rating.

// Constraints

// Output Format

// Print a single integer denoting the maximum amount of luck Lena can have after all the contests.

// Sample Input

// 6 3
// 5 1
// 2 1
// 1 1
// 8 1
// 10 0
// 5 0
// Sample Output

// 29
// Explanation

// There are  contests. Of these contests,  are important and she cannot lose more than  of them. Lena maximizes her luck if she wins the  important contest (where ) and loses all of the other five contests for a total luck balance of .

function luckBalance(k, contests) {
  const important = contests.filter(item => item[1] === 1);
  const notImportant = contests.filter(item => item[1] === 0);
  const sortedImportant = important.sort((a, b) => b[0] - a[0]);
  const sortedNotImportant = notImportant.sort((a, b) => b[0] - a[0]);

  const reducer = [...sortedImportant, ...sortedNotImportant].reduce(
    (accumulator, currentValue, index) => {
      if (currentValue[1] === 1) {
        if (index + 1 <= k) {
          return accumulator + currentValue[0];
        }
        return accumulator - currentValue[0];
      }
      return accumulator + currentValue[0];
    },
    0
  );
  return reducer;
}

function luckBalance1(k, contests) {
  let sumB = 0;
  let sumA = 0;
  const a = [];
  const b = [];

  for (let i = 0; i < contests.length; i++) {
    const elementI = contests[i];
    for (let j = 0; j < elementI.length - 1; j++) {
      const elementJ = elementI[j];

      if (elementI[j + 1] === 1) {
        a.push(elementJ);
      } else {
        b.push(elementJ);
      }
    }
  }

  a.sort((a, b) => b - a);
  b.sort((a, b) => b - a);

  for (let i = 0; i < a.length; i++) {
    const element = a[i];
    if (i + 1 <= k) {
      sumA += element;
    } else {
      sumA -= element;
    }
  }

  for (let i = 0; i < b.length; i++) {
    const element = b[i];
    sumB += element;
  }

  return sumA + sumB;
}

console.log(luckBalance(3, [[5, 1], [2, 1], [1, 1], [8, 1], [10, 0], [5, 0]])); // 29
console.log(luckBalance(2, [[5, 1], [1, 1], [4, 0]])); // 10
console.log(luckBalance(1, [[5, 1], [1, 1], [4, 0]])); // 8

console.log(luckBalance1(3, [[5, 1], [2, 1], [1, 1], [8, 1], [10, 0], [5, 0]])); // 29
console.log(luckBalance1(2, [[5, 1], [1, 1], [4, 0]])); // 10
console.log(luckBalance1(1, [[5, 1], [1, 1], [4, 0]])); // 8
