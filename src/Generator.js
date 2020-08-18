const Generator = (isLetters, isUpperCase, isNumbers, isSpecial, numLen) => {
    const loweCaseLetters = "abcdefghijklmnopqrstuvwxyz";
    const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const special = "!@#%^&*()_-+={}[]:'/?\$|;.,";

    let allowedChars = "";

    allowedChars += (isLetters ? loweCaseLetters : '');
    allowedChars += (isUpperCase ? upperCaseLetters : '');
    allowedChars += (isNumbers ? numbers : '');
    allowedChars += (isSpecial ? special : '');

    let result = "";

    for (let i = 0, n = allowedChars.length; i < numLen; i++) {
        result += allowedChars.charAt(Math.floor(Math.random() * n));
    }

    return result;
};

export default Generator;