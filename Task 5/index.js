/**
 * Design a function that takes a list of integers as input. The function should
return True if the list contains two consecutive threes (3 next to a 3) anywhere
within the list. Otherwise, it should return False. For example, the function
should return True for [1, 3, 3] and False for [1, 3, 1, 3].
 */
const myIntegers = window.prompt("Enter a list of numbers separated by spaces");
let myArray = myIntegers.split(' ').map(Number)
function hasConsecutiveThrees(arr) {
    //iterate through the array 
    for (let i = 0; i < arr.length -1 ; i++) {
        //check if the currect element of the array is a three and if the previous element of the array is three
        if (arr[i] === 3 && arr[i + 1] === 3) {
            return true;
        }
       
    }
    return false;
}
alert(hasConsecutiveThrees(myArray))
