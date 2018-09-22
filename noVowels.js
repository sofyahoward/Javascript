function vowelTest()  {
    name= "James"
    //regex expression to match upper case and lower case vowels
    const re =/^[aeiou]$/i;
    //create an array from the string
    var nameArr = name.split('');
    //filter out any vowels
    var filtered =
      nameArr.filter((vowel, i) => {
        if(vowel.match(re)){
           return false
        }
           return true
      }
     )
     //join it back up
   console.log(filtered.join(''))
  }
vowelTest();