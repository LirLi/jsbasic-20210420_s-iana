
let salaries = {
  John: 1000,
  Ann: 1600,
  Pete: 1300,
  month: 'December',
  currency: 'USD',
  isPayed: false,
}

function sumSalary (salaries){
  let sum = 0;
  for (let key in salaries){
  if (isFinite(salaries[key])
      &&
      typeof(salaries[key]) !== "boolean"  
      )
     sum += salaries[key]; 
}
return sum;
}
sumSalary(salaries); 
