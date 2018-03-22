// Observe that its base and height are both equal to , and the image is drawn using # symbols and spaces. The last line is not preceded by any spaces.
// Write a program that prints a staircase of size .
// Input Format
// A single integer, , denoting the size of the staircase.
// Output Format
// Print a staircase of size  using # symbols and spaces.
// Note: The last line must have  spaces in it.


function staircase(n) {
var i = 1;
while (i<=n){
  console.log(" ".repeat(n-i) + "#".repeat(i));
  i++;
}
}
staircase(6);
