//make a function that will return the original string,
//but only the last four digits will be visible
function maskify(cc) {
  //slice off the length of the string, but the last 4 digits
  //replace all symbols with hashtag symbols
  //add the last four symbols back to the string
  return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);

}

maskify("1");
