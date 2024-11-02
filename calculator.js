let currentValue = "";
let lastInputIsOperator = false;
function clearInput() {
    currentValue ="";
    document.getElementById("result").value="";
}

function isOperator(value) {
    return ['+', '-', '*', '/'].includes(value);
}

function appendValue(value) {
    if (isOperator(value)) {
        if (lastInputIsOperator) {
            currentValue = currentValue.slice(0, -1) + value; 
        } else {
            currentValue += value; 
        }
        lastInputIsOperator = true;
    } else {
        currentValue += value;
        lastInputIsOperator = false; 
    }
    
    document.getElementById("result").value = currentValue; 
}


function calculatorResult() {
    currentValue = eval(currentValue);
    document.getElementById("result").value = currentValue;
}

function percent(value) {
    currentValue = currentValue/100;
    document.getElementById("result").value = currentValue;
}

function minusPlus() {
    if (!currentValue.startsWith('-')) {
        currentValue = "-" + currentValue; 
    }
    document.getElementById("result").value = currentValue;
}



