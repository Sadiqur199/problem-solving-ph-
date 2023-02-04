function secondLargest (numbers) {
  let max = -Infinity, result = -Infinity;

  for (const value of numbers) {
    const nr = Number(value);
    if (nr > max) {
      [result, max] = [max, nr] 
    } else if (nr < max && nr > result) {
      result = nr; 
    }
  }

  return result;
}

let numbers = ['10','33','5','99','7'];
let array = secondLargest(numbers);
console.log(array)



