//password stregth checker

let password = prompt("Enter password to check strength !");
//this takes user input

function capitalcount(pass) {
    let count = 0 ; 
    for (let i = 0; i < pass.length; i++) {
        
        if (pass[i] >= 'A' && pass[i]<= 'Z') {
            count++;
        }
    }
    return count;
}


//this function counts capital letters

function numbercount(pass){
  let numbers = 0;
  for (let i = 0; i < pass.length; i++) {

    if(pass[i]>= 1 && pass[i] <= 9){
        numbers++;
    }
  }
  return numbers;
}


//this gives number of numaric characters in password

function specials(pass){
    let matches = pass.match(/[^a-zA-Z0-9]/g);
    return matches ? matches.length : 0;
}
//this counts characters excluding a to z and 0 to 9 means - rest of characters


let total_length = password.length;
let numofsp = specials(password);
let numcount = numbercount(password);
let capital = capitalcount(password);
// final data 

//now the real checker

//the number of characters for each word - weak , medium , strong , very strong

//1 capital, 1 special, 1 number, length - <10 -- medium
//2 capita, 2 special , 4 numbers, lenght - <10 -- strong
//3 or more special character, 3 or more numbers , 3 or more capital ,length - <10 -- very strong
//length <=15 && >=10 , capital >2 , special>=4, numbers >=4 -- super strong

//lets do this
let first = 0;
if(total_length<10){

    first = first+1;
}
else{
    first = first+2;
}

//now the capital letter checker

let second = 0;

if(capital < 1){
second = second+1
}
else if(capital >1 && capital <2){
    second = second + 2
}
else if (capital>3){
    second = second + 3
}

//next is special checker
let third = 0;

if(numofsp <= 1 ){
    third = third + 1 
}
else if (numofsp > 1 && numofsp <= 2){
    third = third + 2 
}
else if (numofsp >=3){
    third = third + 3
}
else {
    third = third + 4 
}

//now numbers checker
let forth = 0;

if(numcount<= 1 ){
    forth = forth + 1 
}
else if (numcount >1 && numcount <=4){
    forth = forth + 2 
}
else if (numcount > 4){
    forth = forth + 3
}



//now the judgement maker

let total = parseInt(first)+parseInt(second)+parseInt(third)+parseInt(forth); // this caculates the total stregth of password by using above if else statements

if (total <= 4){
    alert(`Your password : ${password} is WEAK `)
}
else if (total > 4 && total <= 8 ){
    alert(`your password: ${password} is Medium`)
}
else if (total > 8 && total <=11){
    alert(`your password: ${password} is little stronger`)
}
else if (total > 11 && total <=12){
    alert(`your password: ${password} is stronger !!`)
}
else if (total > 12 && total < 50){
    alert(`You have a SUPER STRONG password: ${password}`)
}
else{
    alert(`Your password exeded the limit of 15 characters or is invalid !!`)
}

//this is simple printing system for each stregth level