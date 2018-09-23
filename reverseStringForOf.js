function FirstReverse(str) { 

  //split string into an array of letters
    var arr = str.split('')
    //have an empty string into which we will push the result
    var revString =''
    //use for of loop to iterate over the array and push each letter into the empty string
    for (let letter of arr){
       revString = letter + revString;   
    }
  
    return console.log(revString)
           
  }
     
  
  FirstReverse('hello');