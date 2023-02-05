function findOddSum(arrOfNumbers) {
  let sum = 0;
  for (let i = 0; i < arrOfNumbers.length; i++) {
    if (arrOfNumbers[i] % 2 !== 0) {
      sum += arrOfNumbers[i];
    }
  }
  if (sum === 0) {
    return;
  }
  return sum;
}
let inputArray = [10,20,30,11,13,15,16]
let outputArray = findOddSum(inputArray);
console.log(outputArray);