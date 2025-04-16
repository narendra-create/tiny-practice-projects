//An email validator

let email = prompt("Enter your email above !");

if(email.includes("@") && email.endsWith(".com")){

    alert("Looks like valid email")
}
else{
    alert("Wrong email or mistype")
}
// this will check if the user typed coreect email