//find the longest word in the sentence after removing punctuation

function LongestWord(sen) { 
//take in a string and replace any punctuation with no space
 var arr = sen.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")
 //split the string into an array
 //sort by length of the word by comparing first word to second and so on
   .split(' ').sort((a, b) => {
         return b.length-a.length
  })
  //return the longest word by returning the 0th element in an array
return(arr[0])
         
}
   
// keep this function call here 
LongestWord(readline());