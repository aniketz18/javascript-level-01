function checkAge() { 

    let age = document.getElementById("ageInput").value;
    let Result = "";
    if (age > 0 && age < 18) {
        Result = " Your minor..!";
    }
    else if (age >= 18) {
        Result = "Your Adult Now..*";
    }
    else if (age > 60) {
        Result = "Your Cinier now rest..^";
    }
    else {
        Result = "Enter Valide age..?";
    }
    document.getElementById("result").innerText = Result;

}