// Using the JavaScript language, have the function FirstFactorial(num) take the num parameter 
//being passed and return the factorial of it (e.g. if num = 4, 
//return (4 * 3 * 2 * 1)). 
//For the test cases, the range will be between 1 and 18 and the input will always be an integer. 

function FirstFactorial(num) { 

  // code goes here 
  var arr = [];
  // code goes here  
  for(i=1; i<=num; i++){
    arr.push(parseInt(i));   
  }
  console.log(arr.reduce(( acc, value ) => acc * value,
  1
  ));
  return num; 
         
}
   
// keep this function call here 
FirstFactorial(readline());  