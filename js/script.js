// Assignment Code
let generateBtn = document.querySelector("#generate");

function generatePassword() {
    let lowerCaseChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    console.log("lowerCaseChars: " + lowerCaseChars)
    let upperCaseChars = []
    for (i = 0; i < lowerCaseChars.length; i++) {
        upperCaseChars.push(lowerCaseChars[i].toUpperCase())
    }
    console.log("upperCaseChars: " + upperCaseChars)
    let numericChars = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    console.log("numericChars: " + numericChars)
    let specChars = ["@", "%", "+", "\\", "/", "'", "!", "#", "$", "^", "?", ":", ",", "(", ")", "{", "}", "[", "]", "~", "-", "_", "."]
    console.log("specChars: " + specChars)
    let useLowerCaseChars, useUpperCaseChars, useNumericChars, useSpecChars, password
    let charBank = []

    let passwordLength
    while (true) {
        passwordLength = parseInt(prompt("Please specify a password length between 8 and 128 characters."))
        if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
            alert("Invalid length. Please try again.")
        } else {
            break
        }
    }
    console.log("passwordLength: " + passwordLength)

    while (true) {
        useLowerCaseChars = confirm("Would you like the password to include lower case characters?")
        console.log("useLowerCaseChars: " + useLowerCaseChars)
        useUpperCaseChars = confirm("Would you like the password to include upper case characters?")
        console.log("useUpperCaseChars: " + useUpperCaseChars)
        useNumericChars = confirm("Would you like the password to contain numeric characters?")
        console.log("useNumericChars: " + useNumericChars)
        useSpecChars = confirm("Would you like the password to contain special characters?")
        console.log("useSpecChars: " + useSpecChars)
        if (useLowerCaseChars === false && useUpperCaseChars === false && useNumericChars === false && useSpecChars === false) {
            alert("At least one one character type must be selected. Please try again.")
        } else {
            break
        }
    }

    if (useLowerCaseChars) {
        charBank.push(...lowerCaseChars)
    }
    if (useUpperCaseChars) {
        charBank.push(...upperCaseChars)
    }
    if (useNumericChars) {
        charBank.push(...numericChars)
    }
    if (useSpecChars) {
        charBank.push(...specChars)
    }
    console.log(charBank)

    while (true) {
        password = ""
        let containsLowerCaseChar, containsUpperCaseChar, containsNumericChar, containsSpecChar = false
        let passwordGood = true

        for (i = 0; i < passwordLength; i++) {
            password += charBank[Math.floor(Math.random() * charBank.length) + 1]
        }
        console.log("password: " + password)

        if (useLowerCaseChars) {
            for (i = 0; i < lowerCaseChars.length; i++) {
                console.log("Checking: " + lowerCaseChars[i])
                containsLowerCaseChar = password.includes(lowerCaseChars[i])
                console.log("containsLowerCaseChar: " + containsLowerCaseChar)
                if (containsLowerCaseChar) {
                    break
                }
            }
        }
        if (useUpperCaseChars) {
            for (i = 0; i < upperCaseChars.length; i++) {
                console.log("Checking: " + upperCaseChars[i])
                containsUpperCaseChar = password.includes(upperCaseChars[i])
                console.log("containsUpperCaseChar: " + containsUpperCaseChar)
                if (containsUpperCaseChar) {
                    break
                }
            }
        }
        if (useNumericChars) {
            for (i = 0; i < numericChars.length; i++) {
                console.log("Checking: " + numericChars[i])
                containsNumericChar = password.includes(numericChars[i])
                console.log("containsNumericChar: " + containsNumericChar)
                if (containsNumericChar) {
                    break
                }
            }
        }
        if (useSpecChars) {
            for (i = 0; i < specChars.length; i++) {
                console.log("Checking: " + specChars[i])
                containsSpecChar = password.includes(specChars[i])
                console.log("containsSpecChar: " + containsSpecChar)
                if (containsSpecChar) {
                    break
                }
            }
        }

        if ((useLowerCaseChars && !containsLowerCaseChar) || (useUpperCaseChars && !containsUpperCaseChar) || (useNumericChars && !containsNumericChar) || (useSpecChars && !containsSpecChar)) {
            passwordGood = false
        }

        if (passwordGood) {
            console.log("passwordGood: " + passwordGood)
            break
        }
    }

    return password
}
// Write password to the #password input
function writePassword() {
    let password = generatePassword();
    let passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);