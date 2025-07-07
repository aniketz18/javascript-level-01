function calculate(){
let n1 = parseFloat(document.getElementById("num1").value);
let n2 = parseFloat(document.getElementById("num2").value);
let opr = document.getElementById("operator").value;
let result;

if(opr == "+") result = n1 + n2;
else if(opr == "-") result = n1 - n2;
else if(opr == "*") result = n1 * n2;
else if(opr == "/") result !== 0 ? n1/n2 : "Cannot divide By Zero";

document.getElementById("result").innerText = "Result : "+ result;

}