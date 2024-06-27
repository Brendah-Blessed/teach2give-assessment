/**
 * Design a function that reverses the digits of an integer. For example, 50
should become 5 and -12 should become -21.
 * 
 * 
 */
const myNum = window.prompt("Enter a number");

//create a function that reverses the numbers provided
function reverseNums(num){
    let myString = String(num);

    let reversedString = myString.split('').reverse().join('');

    myString= Number(reversedString);

    return myString;
}

alert(reverseNums(myNum));