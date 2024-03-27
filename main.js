//Create input string of any phrase and standardize to lowercase.
var input = "Lorem ipsem dolor sit amet consectetur adipiscing elit";
input = input.toLowerCase();

//Initialize our two arrays: vowels and another to hold our output characters
const vowels = ['a', 'e', 'i', 'o', 'u'];
var resultArray = [];

//Runs through each character in input string and adds it to resultArray if it is a vowel (twice if e or u)
for(let i = 0; i < input.length; i++) {
    let currentChar = input.charAt(i);

    for(let j = 0; j < vowels.length; j++) {
        let currentVowel = vowels[j];

        if(currentChar === currentVowel) {
            resultArray.push(currentChar);
            
            if(currentVowel === 'e' || currentVowel === 'u') {
                resultArray.push(currentVowel);
            }
        }
    }
}

//Brings all the vowel characters together into a nice, uppercase string
var resultString = (resultArray.join('')).toUpperCase();

console.log(resultString);
