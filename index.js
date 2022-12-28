/* eslint-disable no-unused-vars */

function clearScreen() {
    document.getElementById("result").value = "";
}
    
function display(value) {
    document.getElementById("result").value += value;
}
    
function calculate() {
    var i = document.getElementById("result").value;
    var j = eval(i);
    document.getElementById("result").value = j;
}