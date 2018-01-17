//x Simple, given a string of words, return the length of the shortest word(s).
//String will never be empty and you do not need to account for different data types.

function findShort(s){
 //split the string into an array
 var newArr = s.split(" ");

 //map through the array and return the lengths of the array
 var lengths = newArr.map(function(word){
   return word.length;
 });

 //sort through the lengths. This ensures that numbers higher than 9 are ordered properly
 var sorted = lengths.sort(function(a, b){
   return a-b;
 });

 // the smallest variable
 return sorted[0];
}

findShort("lets talk about javascript the best language");
