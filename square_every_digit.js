// DESCRIPTION:

// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer

function squareDigits(num){
    //Cast num into a string and then separates each digit into an array
    let arrNum = String(num).split('')
    for(let i = 0; i < arrNum.length; i++){
      arrNum[i] = arrNum[i]*arrNum[i]
    }
    //Cast back to a number after the array is joined using the '' space.
    return Number(arrNum.join(''))
  }