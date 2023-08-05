function calculateSquare() {
    var numberValue1 = parseInt(document.getElementById("numInput").value);
    var numberValue2 = parseInt(document.getElementById("numInputsec").value);
    var square = Math.pow(numberValue1, numberValue2);
    if (isNaN(numberValue1) && isNaN(numberValue2)){
        document.getElementById("result").innerHTML = "Invalid input"
    } else if(isNaN(numberValue1) && numberValue2) {
        document.getElementById("result").innerHTML = "Invalid input"
    } else if(isNaN(numberValue2) && numberValue1) {
        document.getElementById("result").innerHTML = "Invalid input"
    } else {
        document.getElementById("result").innerHTML = numberValue1 + " raised to power of " + numberValue2 + " is " + square;
    }
}