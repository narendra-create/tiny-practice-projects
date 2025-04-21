// Password strength checker

let password = prompt("Enter password to check strength!");
// This takes user input

function capitalcount(pass) {
    let count = 0;
    for (let i = 0; i < pass.length; i++) {
        if (pass[i] >= 'A' && pass[i] <= 'Z') {
            count++;
        }
    }
    return count;
}
// This function counts capital letters

function numbercount(pass) {
    let numbers = 0;
    for (let i = 0; i < pass.length; i++) {
        if (pass[i] >= '1' && pass[i] <= '9') {
            numbers++;
        }
    }
    return numbers;
}
// This function gives number of numeric characters in the password

function specials(pass) {
    let matches = pass.match(/[^a-zA-Z0-9]/g);
    return matches ? matches.length : 0;
}
// This counts characters excluding a-z and 0-9, meaning the rest of the characters

let total_length = password.length;
let numofsp = specials(password);
let numcount = numbercount(password);
let capital = capitalcount(password);
// Final data 

// Now the real checker

// The number of characters for each word - weak, medium, strong, very strong
// 1 capital, 1 special, 1 number, length < 10 -- medium
// 2 capital, 2 special, 4 numbers, length < 10 -- strong
// 3 or more special characters, 3 or more numbers, 3 or more capitals, length < 10 -- very strong
// Length <= 15 && >= 10, capital > 2, special >= 4, numbers >= 4 -- super strong

// Let's do this
let first = 0;
if (total_length < 10) {
    first = first + 1;
} else {
    first = first + 2;
}

// Now the capital letter checker
let second = 0;
if (capital < 1) {
    second = second + 1;
} else if (capital > 1 && capital < 2) {
    second = second + 2;
} else if (capital > 3) {
    second = second + 3;
}

// Next is special character checker
let third = 0;
if (numofsp <= 1) {
    third = third + 1;
} else if (numofsp > 1 && numofsp <= 2) {
    third = third + 2;
} else if (numofsp >= 3) {
    third = third + 3;
} else {
    third = third + 4;
}

// Now the numbers checker
let forth = 0;
if (numcount <= 1) {
    forth = forth + 1;
} else if (numcount > 1 && numcount <= 4) {
    forth = forth + 2;
} else if (numcount > 4) {
    forth = forth + 3;
}

// Now the judgement maker
let total = parseInt(first) + parseInt(second) + parseInt(third) + parseInt(forth);
// This calculates the total strength of the password by using the above if-else statements

if (total <= 4) {
    alert(`Your password: ${password} is WEAK`);
} else if (total > 4 && total <= 8) {
    alert(`Your password: ${password} is Medium`);
} else if (total > 8 && total <= 11) {
    alert(`Your password: ${password} is a little stronger`);
} else if (total > 11 && total <= 12) {
    alert(`Your password: ${password} is stronger!!`);
} else if (total > 12 && total < 50) {
    alert(`You have a SUPER STRONG password: ${password}`);
} else {
    alert(`Your password exceeded the limit of 15 characters or is invalid!!`);
}

// This is the simple printing system for each strength level
