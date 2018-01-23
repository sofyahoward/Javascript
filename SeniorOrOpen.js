//To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

function openOrSenior(data){

  //create an empty array to hold the result
  var result = []

  //map through the array to return each variable in each array
  data.map(function(i){

  //both statements have to be true to return "Senior result"
    if (i[0] >=55 && i[1] >7) {
    result.push("Senior")
}
else{
    result.push("Open")
}
  });

  //return the result
  return result
}

openOrSenior([[1, 1], [90, 8], [90, 9], [60, 12], [75, 11], [0, 0], [90, 7], [21, 21], [55, 10], [54, 9]]);
