
function secondLargest(numbers) {
  let max = -Infinity, result = -Infinity;
  for (const value of array) {
    const nr = Number(value)

    if (nr > max) {
      [result, max] = [max, nr] 
    } else if (nr < max && nr > result) {
      result = nr; 
    }
  }

  return result;
}

const array = ['20','120','111','215','54','78'];
console.log(secondLargest(array));