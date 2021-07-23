function collectInput(){
    let name = document.getElementById("name").value;
    let gender = document.querySelector('input[name=male-female]:checked').value;
    let dob = document.getElementById("dob").value;
    generateAkanName();
    //Data Validation
}

function findBirthDay(){
    let dob = document.getElementById("dob").value;
    let stringArray = dob.split("-");
    let dateArray = stringArray.map( (date) => {
        return parseInt(date);
    });
    //dateArray -> array of numbers.
    let year = dateArray[0];
    let centuryString = year.toString().slice(0, 2);
    let yearString = year.toString().slice(2);
    let cc = parseInt(centuryString);
    let yy = parseInt(yearString);

    //Day of the week (d) = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) mod 7
    let day = Math.floor((((cc/4) - 2*cc-1) + (5*yy/4) + (26*(dateArray[1] + 1)/10) + dateArray[2]) % 7);
    return day;
}

function generateAkanName(){
    let gender = document.querySelector('input[name=male-female]:checked').value;
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
    let maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    let femaleNames = ["Akosua", "Adwoa", " Abenaa", " Akua", "Yaa", "Afua", " Ama"];
    let day = findBirthDay();

    let akanName = "";
    if (gender === "male") {
        akanName = maleNames[day];
        alert(akanName);
    }
    else if (gender === "female") {
        akanName = femaleNames[day];
        alert(akanName);
    }
    else {
        alert("Oops! Something went wrong");
    }
}