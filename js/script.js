// Assignment Code
let generateBtn = document.querySelector("#generate");

function generatePassword() {
    // Declare and initialize some variables, using arrays to store all possible characters of each type
    let lowercaseChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    console.log("lowercaseChars: " + lowercaseChars)
    let uppercaseChars = []
    for (i = 0; i < lowercaseChars.length; i++) {
        uppercaseChars.push(lowercaseChars[i].toUpperCase())
    }
    console.log("uppercaseChars: " + uppercaseChars)
    let numericChars = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    console.log("numericChars: " + numericChars)
    let specChars = ["@", "%", "+", "\\", "/", "'", "!", "#", "$", "^", "?", ":", ",", "(", ")", "{", "}", "[", "]", "~", "-", "_", "."]
    console.log("specChars: " + specChars)
    let passwordLength, useLowercaseChars, useUppercaseChars, useNumericChars, useSpecChars, password
    let charBank = []
    let attempt = 1

    // Prompt user for password length, ensuring it's between 8 and 128
    while (true) {
        passwordLength = parseInt(prompt("Please specify a password length between 8 and 128 characters."))
        if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
            alert("Invalid length. Please try again.")
        } else {
            break
        }
    }
    console.log("passwordLength: " + passwordLength)

    // Prompt user for character types to be included, ensuring at least 1 is selected
    while (true) {
        useLowercaseChars = confirm("Would you like the password to include lowercase characters?")
        console.log("useLowercaseChars: " + useLowercaseChars)
        useUppercaseChars = confirm("Would you like the password to include uppercase characters?")
        console.log("useUppercaseChars: " + useUppercaseChars)
        useNumericChars = confirm("Would you like the password to contain numeric characters?")
        console.log("useNumericChars: " + useNumericChars)
        useSpecChars = confirm("Would you like the password to contain special characters?")
        console.log("useSpecChars: " + useSpecChars)
        if (useLowercaseChars === false && useUppercaseChars === false && useNumericChars === false && useSpecChars === false) {
            alert("You must select at least one character type. Please try again.")
        } else {
            break
        }
    }

    // Create array for generator to randomly select from
    if (useLowercaseChars) {
        charBank.push(...lowercaseChars)
    }
    if (useUppercaseChars) {
        charBank.push(...uppercaseChars)
    }
    if (useNumericChars) {
        charBank.push(...numericChars)
    }
    if (useSpecChars) {
        charBank.push(...specChars)
    }
    console.log(charBank)

    // Generate passwords until criteria are met
    while (true) {
        console.log("Attempt: " + attempt)

        // Define local variables
        password = ""
        let containsLowercaseChar, containsUppercaseChar, containsNumericChar, containsSpecChar = false
        let passwordGood = true

        // Generate password
        for (i = 0; i < passwordLength; i++) {
            password += charBank[Math.floor(Math.random() * charBank.length) + 1]
        }
        console.log("password: " + password)

        // Check if password contains at least 1 of each character type specified by user
        if (useLowercaseChars) {
            for (i = 0; i < lowercaseChars.length; i++) {
                console.log("Checking: " + lowercaseChars[i])
                containsLowercaseChar = password.includes(lowercaseChars[i])
                console.log("containsLowercaseChar: " + containsLowercaseChar)
                if (containsLowercaseChar) {
                    break
                }
            }
        }
        if (useUppercaseChars) {
            for (i = 0; i < uppercaseChars.length; i++) {
                console.log("Checking: " + uppercaseChars[i])
                containsUppercaseChar = password.includes(uppercaseChars[i])
                console.log("containsUppercaseChar: " + containsUppercaseChar)
                if (containsUppercaseChar) {
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

        // If not, increment attempt and start over
        if ((useLowercaseChars && !containsLowercaseChar) || (useUppercaseChars && !containsUppercaseChar) || (useNumericChars && !containsNumericChar) || (useSpecChars && !containsSpecChar)) {
            passwordGood = false
            attempt++
        }
        console.log("passwordGood: " + passwordGood)

        // Otherwise, break out of infinite while loop
        if (passwordGood) {
            break
        }
    }

    // Password is good; return it to the calling statement
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