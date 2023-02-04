  function findOddSum(arrOfNumbers){
        let oddCountArray = [];
        for(let i=0;i<arrOfNumbers.length;i++)
        {
          let index = arrOfNumbers[i];
          if(index%2 == 1)
          {
            oddCountArray.push(index)

          }
        }
        return oddCountArray;
    }
    function findArraySum(Numbers){
      let sum = 0 ;
        for (let i=0;i<Numbers.length;i++){
          let element = Numbers[i]
                sum+=element;
    
        }
          return sum;
      }
    let arrayInput = [5, 7, 8, 10, 45, 30];
    let arrayOutput = findOddSum(arrayInput)
    let oddNumberarray = findArraySum(arrayOutput);
    console.log(oddNumberarray)