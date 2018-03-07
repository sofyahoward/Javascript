//find the middle element of the array using ES6 syntax

var gimmie = inputArray => inputArray.indexOf(inputArray.slice(0).sort((a,b) => a-b)[1]);


gimmie([21, 38, 1]);

//use JS built-in funtion to return index of the particular Number
//slice(0) to make a shallow copy of the ordered Array
//sort it through a function to account for digits larger than 0-9
//return the first index of the sorted array, since that would be the middle Number
