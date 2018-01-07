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

  //push the result into an empty array
  for (var i = sorted[0]; i <= sorted[sorted.length - 1]; i++) {
      allNumbers.push(i);
  }

  //reduce the result by adding all variables
  var sum = allNumbers.reduce(function(a,b){
   return a+b
 })
  return sum
}
GetSum(-453, -411)
