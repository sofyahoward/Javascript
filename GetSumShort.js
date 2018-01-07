//create a function that sums all integers between arguments

function GetSum(a, b) {
 let min = Math.min(a,b);
 let max = Math.max(a,b);

 return (max - min + 1) * (min + max) / 2;
}
GetSum(-453, -411);
