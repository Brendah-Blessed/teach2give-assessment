/**
 * Design a function that takes a string or sequence of characters as input and
returns the character that appears most frequently.
 */
const myString = window.prompt("Enter a word");

function findMostFrequentCharacter(str) {
    //create an object to store the characters
    let frequentCharsMap = {};

    //loop through the characters in the string
    for (let character of str) {
        //if the character has been added to the object increase its count
        if (frequentCharsMap[character]) {
            frequentCharsMap[character]++;
        } else {
            //add the character to the object of frequent characters
            frequentCharsMap[character] = 1;
        }
    }

    //store the most frequent characters in a variable

    let maximumCharacterCount = 0;
    let mostFrequentCharacter = 0;
    //iterate through the frequentCharsMap to find the most repeated
    for (let character in frequentCharsMap) {
        if (frequentCharsMap[character] > maximumCharacterCount) {
            maximumCharacterCount = frequentCharsMap[character];
            mostFrequentCharacter = character;
        }

    }
    return mostFrequentCharacter;
}

alert(findMostFrequentCharacter(myString));