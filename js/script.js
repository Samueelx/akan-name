function collectInput(){
    let name = document.getElementById("name").value;
    let gender = document.querySelector('input[name=gender]:checked').value
    alert("I am " + name + " and I'm " + gender);
}