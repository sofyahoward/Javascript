//find a sum of an array where n is the nuber of items in an array and ar is the array of integers
var aVeryBigSum = (n,ar) => {
  var sum = ar.reduce((a,b) => a+b);
  return sum;
};
aVeryBigSum(2, [1, 2]);
