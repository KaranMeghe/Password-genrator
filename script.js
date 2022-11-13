// Getting DOM elements
const form = document.getElementById('passwordGenratorForm');
const resultDOM = document.getElementById('result');
const copyBtnDOM = document.getElementById('copy');
const lengthDOM = document.getElementById('length');
const upperCaseDOM = document.getElementById('uppercase');
const numbersDOM = document.getElementById('numbers');
const symbolsDOM = document.getElementById('symbols');
const genratebtn = document.getElementById('genrate');

//Chracter Code Genrating Function
function arrayFromLowToHigh(low,high){
    const array = [];
    for(let i = low; i <= high.length; i++){
        array.push(i);
    }
    return array;
 } 

// Getting character codes For The Application
const UPPERCASE_CODES = arrayFromLowToHigh(65,90);
const LOWERCASE_CODES = arrayFromLowToHigh(97,122);
const NUMBERS_CODES = arrayFromLowToHigh(48,57);
const SYMBOLS_CODES = arrayFromLowToHigh(33,47)
                     .concat(arrayFromLowToHigh(58,64))
                     .concat(arrayFromLowToHigh(91,96))
                     .concat(arrayFromLowToHigh(123,126));



// The Password Genrating function
let genratePassword = (
    characterAmount,
    includeUpperCase,
    includeNumbers,
    includeSymbols
) => {
    let charCodes = LOWERCASE_CODES;
    if(includeUpperCase) charCodes = charCodes.concat(UPPERCASE_CODES);
    if(includeNumbers) charCodes = charCodes.concat(NUMBERS_CODES);
    if(includeSymbols) charCodes = charCodes.concat(SYMBOLS_CODES);

    const passWordCharacters = [];
    for(let i = 0; i < characterAmount; i++){
        const charCode = charCodes[Math.floor(Math.random() * charCodes.length)];

        passWordCharacters.push(String.fromCharCode(charCode))
    }
    return passWordCharacters.join('');
}


// Copy Password Button

copyBtnDOM.addEventListener('click', () => {
    const textArea = document.createElement('textarea');
    const passwordToCopy = resultDOM.innerText;

    // A case when password is empty
    if(!passwordToCopy) return;

    // Copy Functionality
    textArea.value = passwordToCopy;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    textArea.remove();
    alert("Password Copied to Clipboard");
})