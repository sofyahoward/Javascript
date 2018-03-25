function timeConversion(time) {
// split the string into specific parts by hrs, mins, seconds, and AM/PM designation
   var timeParts = time.split(':');
   var hour = Number(timeParts[0]);
   console.log(hour)
   var min = timeParts[1]
   var sec = timeParts[2].substr(0,2);
   var amPm = timeParts[2].substr(2);

//cover the noon/modnight points

  if(amPm == 'AM'){
    if(hour == 12) hour = 0;
} else {
    if(hour != 12) hour += 12;
}

   if(hour < 10){
    hour = '0' + hour;
}
//return the string by concatenation
return (hour + ':' + min + ':' + sec);
