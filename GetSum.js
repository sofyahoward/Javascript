//create a function that sums all numbers in beween and including its arguments

function GetSum() {
  //create an array from arguments
  var numbers = Array.from (arguments);

  //create an empty array to oush the result into
  var allNumbers = []

  //sort the current array
  var sorted = numbers.sort(function (a, b){
    return a-b
  });

  //Assign each argument to a local variable for a for loop to run.
  var x = sorted[0];
  var y = sorted[sorted.length - 1];

  //push the result into an empty array
  for (var i = x; i <= y; i++) {
      allNumbers.push(i);
  }

  //reduce the result by adding all variables
  var sum = allNumbers.reduce(function(a,b){
   return a+b
 })
  return sum
}
GetSum(-453, -411)
