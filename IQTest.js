//Bob is preparing to pass IQ test. The most frequent task in this test is to find out which one of the given numbers differs from the others. Bob observed that one number usually differs from the others in evenness. Help Bob — to check his answers, he needs a program that among the given numbers finds one that is different in evenness, and return a position of this number.

//! Keep in mind that your task is to help Bob solve a real IQ test, which means indexes of the elements start from 1 (not 0)

function iqTest(numbers){
  var OddArrPosition = [];
  var EvenArrPosition = [];

  var newArr = numbers.split(" ") ;

  var result= newArr.map(EvenOrOdd);
    function EvenOrOdd(i) {
     if (i % 2 === 0) {
   OddArrPosition.push(newArr.indexOf(i))}
     else {EvenArrPosition.push(newArr.indexOf(i))}
    }

 if (OddArrPosition.length == 1){
    var odd = OddArrPosition.join()
    return parseInt(odd)+1;
  }
  else{ var even = EvenArrPosition.join()
    return parseInt(even)+1}
}

iqTest("2 4 6 29 10")
