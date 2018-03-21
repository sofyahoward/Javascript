// You are in-charge of the cake for your niece's birthday and have decided the cake will have one candle for each year of her total age. When she blows out the candles, she’ll only be able to blow out the tallest ones.
// For example, if your niece is turning  years old, and the cake will have  candles of height , , , , she will be able to blow out  candles successfully, since the tallest candle is of height  and there are  such candles.
// Complete the function birthdayCakeCandles that takes your niece's age and an integer array containing height of each candle as input, and return the number of candles she can successfully blow out.




function birthdayCakeCandles(n, ar) {
  var largest = Math.max.apply(Math, ar);
  var result = ar.filter(c=> c===largest)
  return result.length
}
birthdayCakeCandles(4,[3, 2, 1, 3])
