// multiplication table genrator

let main = prompt("Enter the number")

for (let i = 1; i < 11; i++) {
    
    let result = main * i;

    alert(result);
}



//2nd

// let birth = prompt("Enter your birth year")
// let year = 2025;
// let age = year - birth;
// alert("your age is -> " + age)




// 3 - the split calculator

// let ttotal = prompt("Total amount ?")
// let ttip = prompt ("Any tip ?")
// let ppeople = prompt ("Number of people ?")

// let total = parseInt(ttotal);
// let tip = parseInt(ttip);
// let people = parseInt(ppeople);

// let with_tip = total + tip;

// let perperson = parseInt(with_tip) / people ;

// perperson = perperson.toFixed(2);

// alert(`the total amount(with tip) is - ${with_tip} and for each person -  ${perperson}`);




//4 -  BMI calculator

// let body = prompt("Your bodyweight ?")
// let age = prompt("Age?")
// let height = prompt("Your height(in centimeter) ?")

// let mhh = parseFloat(height)/100


// let bmi = body/(mhh*mhh)

// bmi = bmi.toFixed(2)

// if(bmi<18.5){
//     alert(`Your bmi is = ${bmi} but you are UNDERweight!`)
// }
// else if(bmi>=18.5 && bmi<25){
//     alert(`Your bmi is = ${bmi} and you are completly NORMAL`)
// }
// else if (bmi>=25 && bmi < 30){
//     alert(`Your bmi is = ${bmi} but you are little obease`)
// }
// else{
//     alert(`your bmi is = ${bmi} but you are an elephent DO SOMETHING ABOUT IT!`)
// }