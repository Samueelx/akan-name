function collectInput(){
    let name = document.getElementById("name").value;
    let gender = document.querySelector('input[name=male-female]:checked').value;
    let dob = document.getElementById("dob").value;
    findBirthDay(dob);
    //Data Validation
}

function findBirthDay(dob){
    let stringArray = dob.split("-");
    let dateArray = stringArray.map( (date) => {
        return parseInt(date);
    });
    //dateArray -> array of numbers.
    let year = dateArray[0];
    let yearString = year.toString().split('');
    
    
}