function processData(input) {
  const inputs = input.split('\n');
  const numOfQueries = Number(inputs[0]);
  const result = [];
  for (let i = 1; i <= numOfQueries; i++) {
    const query = inputs[i];
    const action = Number(query.split(' ')[0]);
    const val = Number(query.split(' ')[1]);
    switch (action) {
      case 1:
        result.push(val);
        break;
      case 2:
        result.pop();
        break;
      case 3:
        let max = 0;
        for (let i = 0; i < result.length; i++) {
          if (result[i] > max) {
            max = result[i];
          }
        }
        console.log(max);
        break;
      default:
        break;
    }
  }
}

function processData1(input) {
  const result = [];
  for (let i = 0; i < input.length; i++) {
    switch (input[i][0]) {
      case 1:
        result.push(input[i][1]);
        break;
      case 2:
        result.pop();
        break;
      case 3:
        let max = 0;
        for (let i = 0; i < result.length; i++) {
          if (result[i] > max) {
            max = result[i];
          }
        }
        console.log(max);
        break;
      default:
        break;
    }
  }
}

console.log(processData1([[1, 97], [2], [1, 20], [2], [1, 26], [1, 20], [2], [3], [1, 91], [3]]));
