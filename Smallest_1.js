function findingSmallest ( numbers ) {
  let largest = numbers[0];
  for(let i=0 ; i<numbers.length;i++)
  {
    let element = numbers[i];
    if(element<largest){
      largest = element;
    }
  }
  
  return largest;
  }
  let inputArray = [10,33,5,99,6]
  let outputArray = findingSmallest(inputArray)
  console.log(outputArray);