/*Design a function that determines whether a given string is a pangram. A
pangram is a sentence or phrase containing every letter of the alphabet at
least once. Punctuation and case are typically ignored. For example, the
string "The quick brown fox jumps over the lazy dog" is a pangram, while
"Hello, world!" is not.*/
const mySentence = window.prompt("Enter a sentence");

function checkIfIsPangram(sentence){
    let alphabets = "abcdefghijklmnopqrstuvwxyz";
    let lowerCaseSentence = sentence.toLowerCase().replace(/[^a-z]/g, '');//conver the sentence into lowercase

    for(let letter of alphabets){
        //check if there is a missing letter in the sentence and return false
        if(!lowerCaseSentence.includes(letter)){
            return false;
        }
//if no missing letter return true
        return true;
    }
}

alert(checkIfIsPangram(mySentence));
