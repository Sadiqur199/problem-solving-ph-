function findLeapYear(arrOfYears){
  let newLeepYear = [];
  for(let i = 0; i<arrOfYears.length; i++)
  {
    let element = arrOfYears[i];
    if(element%4 == 0)
    {
      newLeepYear.push(element);
    }
  }
  return newLeepYear;
  }
  let InputYears = [2023,2024,2025,2028,2030]
  let OutputYears = findLeapYear(InputYears);
  console.log(OutputYears);