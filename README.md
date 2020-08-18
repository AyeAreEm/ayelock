# AyeLock
AyeLock is a random password generator that uses react.

## How it works
There is a file to generate the passwords which also allows specific settings such as letters, uppercase letters, special characters, numbers and the length.

## How it works in code
## The generator

```javascript
const Generator = (isLetters, isUpperCase, isNumbers, isSpecial, numLen) => {
    const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz"; // all lowercase letters
    const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; // uppercase letters
    const numbers = "0123456789"; // numbers
    const special = "!@#%^&*()_-+={}[]:'/?\$|;.,"; //special characters

    let allowedChars = "";

    // if isLetters is true, add lowercase letters, else add nothing to allowedChars
    allowedChars += (isLetters ? lowerCaseLetters : '');
    allowedChars += (isUpperCase ? upperCaseLetters : '');
    allowedChars += (isNumbers ? numbers : '');
    allowedChars += (isSpecial ? special : '');

    let result = "";

    // while i is smaller than the length of the password
    for (let i = 0, n = allowedChars.length; i < numLen; i++) {
        // at a random character in allowedChar, add to result
        result += allowedChars.charAt(Math.floor(Math.random() * n));
    }

    return result;
};
```

## Display the passwords

```jsx
// type means if it is weak, strong, etc. isRed is to style the type red.
const Password = ({type, isRed, password}) => {

    return (
        <div className="PasswordBox">
            {/* if isRed is true, set the class to red, else set it to nothing */}
            <h2><span className={isRed ? "red" : ''}>{type}</span></h2>
            <h2>{password}</h2>
        </div>
    );
};
```