function collectInput(){
    let name = document.getElementById("name").value;
    let gender = document.querySelector('input[name=male-female]:checked').value;
    let dob = document.getElementById("dob").value;
    let parameter = dob.split("");
    /**dob is a string value.
     * YYYY-MM-DD
     * parameter is the array version of the string input
    */
     alert("You were born on day " + calculateDay(parameter) + " of the week and your akanname is: " + determineName());
}

function calculateDay(dob){
    /**Day of the week (d) = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) mod 7 */
    let cc = parseInt(dob[0] + dob[1]); //century digits
    let century = ((cc/4) - 2*cc-1);
    let yy = parseInt(dob[2] + dob[3]);
    let year = (5*yy/4);
    let mm = parseInt(dob[5] + dob[6]);
    let month = (26*(mm+1)/10);
    
    let day = Math.floor((century + year + month + (parseInt(dob[8] + dob[9]))) % 7);
    return day;
}
let day = calculateDay(document.getElementById("dob").value);

function determineName(){
    let gender = document.querySelector('input[name=male-female]:checked').value;
    let maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    let femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    let akanName, i;

    if(gender === "male") {
        akanName = maleNames[day];
    }
    else if(gender === "female"){
        akanName = femaleNames[day];
    }
    return akanName;
}