//Given an array of integers, calculate which fraction of its elements are positive, which fraction of its elements are negative, and which fraction of its elements are zeros. Print the decimal value of each fraction on a new line.


//Version 1
function plusMinus(n, arr) {
    // Complete this function
    var posArr = [];
    var negArr = [];
    var zeroArr = [];

    var filtered= arr.filter(function(i){
     if (i>0){ posArr.push(i);
     } else if (i===0){ zeroArr.push(i)

     } else if (i<0){ negArr.push(i)}
    })

    console.log(posArr.length/n);
    console.log (negArr.length/n);
    console.log (zeroArr.length/n);

}
plusMinus(7, [0,1,-2,3,-4,5])

//Version 2

function plusMinus(arr) {
    // Complete this function
    let positives = parseFloat(arr.filter(value => value > 0).length / arr.length).toPrecision(6)
    let negatives = parseFloat(arr.filter(value => value < 0).length / arr.length).toPrecision(6)
    let zeroes = parseFloat(arr.filter(value => value === 0).length / arr.length).toPrecision(6)

    console.log(positives)
    console.log(negatives)
    console.log(zeroes)

}
