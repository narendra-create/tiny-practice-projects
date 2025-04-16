
//prime number checker


let user = parseInt(prompt("Enter a number !!"))

let isprime = true;

if(user<=1){
    isprime = false;
}



for (let i = 2; i < user; i++) {
    if(user % i === 0){
        isprime = false;
        break;
    }
}


if(isprime){

    alert(user + " is prime number !!")
}

else {
    alert(user + " is not a prime number")
}
