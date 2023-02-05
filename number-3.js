
// function secondLargest(numbers) {
//   let max = -Infinity, result = -Infinity;
//   for (const value of array) {
//     const nr = Number(value)

//     if (nr > max) {
//       [result, max] = [max, nr] 
//     } else if (nr < max && nr > result) {
//       result = nr; 
//     }
//   }

//   return result;
// }

// const array = ['20','120','111','215','54','78'];
// console.log(secondLargest(array));



/// sort cut secondlargest number
function  secondLargest ( numbers ) {
  numbers.sort((a, b) => b - a);
  let largest = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < largest) {
      return numbers[i];
    }
  }
  return null;
}
const array = ['20','120','111','215','54','78'];
console.log(secondLargest(array));