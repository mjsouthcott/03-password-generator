// Assignment Code
let generateBtn = document.querySelector("#generate");

function generatePassword() {
    // Declare and initialize variables
    let lowercaseChars = {}
    lowercaseChars.list = "abcdefghijklmnopqrstuvwxyz"
    console.log("lowercaseChars.list: " + lowercaseChars.list)
    let uppercaseChars = {}
    uppercaseChars.list = lowercaseChars.list.toUpperCase()
    console.log("uppercaseChars.list: " + uppercaseChars.list)
    let numericChars = {}
    numericChars.list = "0123456789"
    console.log("numericChars.list: " + numericChars.list)
    let specialChars = {}
    specialChars.list = "@%+\\/'!#$^?:,(){}[]~-_."
    console.log("specialChars.list: " + specialChars.list)
    let passwordLength, randomIndex, temporaryValue
    let unshuffledPassword = ""
    let charBank = []
    let shuffledPassword = []

    // Prompt user for password length, ensuring it's between 8 and 128
    do {
        passwordLength = parseInt(prompt("Please specify a password length between 8 and 128 characters."))
    } while (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength))
    console.log("passwordLength: " + passwordLength)

    // Prompt user for character types to be included, ensuring at least 1 is selected
    do {
        alert("Please select at least 1 of the following 4 character types.")
        lowercaseChars.select = confirm("Would you like the password to include lowercase characters?")
        console.log("lowercaseChars.select: " + lowercaseChars.select)
        uppercaseChars.select = confirm("Would you like the password to contain uppercase characters?")
        console.log("uppercaseChars.select: " + uppercaseChars.select)
        numericChars.select = confirm("Would you like the password to contain numeric characters?")
        console.log("numericChars.select: " + numericChars.select)
        specialChars.select = confirm("Would you like the password to contain special characters?")
        console.log("specialChars.select: " + specialChars.select)
    } while (lowercaseChars.select === false && uppercaseChars.select === false && numericChars.select === false && specialChars.select === false)

    // Create bank to select characters from, and begin constructing password with 1 character of each selected type
    if (lowercaseChars.select) {
        charBank += lowercaseChars.list
        unshuffledPassword += lowercaseChars.list[Math.floor(Math.random() * lowercaseChars.list.length)]
    }
    if (uppercaseChars.select) {
        charBank += uppercaseChars.list
        unshuffledPassword += uppercaseChars.list[Math.floor(Math.random() * uppercaseChars.list.length)]
    }
    if (numericChars.select) {
        charBank += numericChars.list
        unshuffledPassword += numericChars.list[Math.floor(Math.random() * numericChars.list.length)]
    }
    if (specialChars.select) {
        charBank += specialChars.list
        unshuffledPassword += specialChars.list[Math.floor(Math.random() * specialChars.list.length)]
    }
    console.log("charBank: " + charBank)
    console.log("unshuffledPassword: " + unshuffledPassword)

    // Finish constructing password
    for (i = unshuffledPassword.length; i < passwordLength; i++) {
        unshuffledPassword += charBank[Math.floor(Math.random() * charBank.length)]
    }
    console.log("unshuffledPassword: " + unshuffledPassword)

    // Shuffle password to ensure randomness
    shuffledPassword = unshuffledPassword.split("")
    let currentIndex = passwordLength
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex--
        temporaryValue = shuffledPassword[currentIndex]
        shuffledPassword[currentIndex] = shuffledPassword[randomIndex]
        shuffledPassword[randomIndex] = temporaryValue
    }
    console.log("shuffledPassword: " + shuffledPassword.join(""))

    // Return shuffled password
    return shuffledPassword.join("")
}

// Write password to the #password input
function writePassword() {
    let password = generatePassword();
    let passwordText = document.querySelector("#password");
    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);