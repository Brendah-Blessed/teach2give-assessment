//Write a recursive function to calculate the factorial of a number;
const theNumber = window.prompt("Enter the number");

function factorialOfANumber(num){
    //if the num is 0 return 1
    if(num === 0){
        return 1;
    }
    //factorial of a number is (number - 1)* number
    return num * factorialOfANumber(num-1);
}

alert(factorialOfANumber(theNumber))


