//A simple unit converter

function choices(users) {
    let choose = prompt("Enter which thing to convert (Number only) ?" + "\n 1. KM to Miles" + "\n 2. Miles to KM" + "\n 3. Celsius to Fahrenheit" + "\n 4. Fahrenheit to Celsius" + "\n 5. KG to LBs" + "\n 6. LBs to KG")
    return parseInt(choose)
}// for user input

function converter() {



    let choice = choices();

    if (choice === 1) {
        let given = prompt("Enter KM in numbers only");
        given = parseInt(given) * 0.621371;
        alert(`✅result : ${given} miles`)
    }
    else if (choice === 2) {
        let given = prompt("Enter Miles in Numbers only");
        given = parseInt(given) * 1.60934;
        alert(`✅result : ${given} KM`)
    }
    else if (choice === 3) {
        let given = prompt("Enter Celsius without degree a only number !")
        given = (parseInt(given) * 9 / 5) + 32;
        alert(`✅result : ${given} fahrenheit`)
    }
    else if (choice === 4) {
        let given = prompt("Enter temprature in fahrenheit without degree symbol !")
        given = (parseInt(given) - 32) * 5 / 9;
        alert(`✅result : ${given} celsius`)
    }
    else if (choice === 5) {
        let given = prompt("Enter Weight in KGs")
        given = parseInt(given) * 2.20462;
        alert(`✅result : ${given} lbs`)
    }
    else if (choice === 6) {
        let given = prompt("Enter weight in Lbs")
        given = parseInt(given) * 0.453592;
        alert(`✅result : ${given} KG`)
    }

    else {
        alert("Your input is wrong, please refresh and try again !!")
    };



    let last = parseInt(prompt("Anything else ?" + "\n 1. main menu" + "\n 2. NO"));

    if (last === 1) {
        converter();// recursion, loop style
    }
    else if (last === 2) {
        alert("Bye, Bye🤝")
    }
}

converter();  // call the whole thing
