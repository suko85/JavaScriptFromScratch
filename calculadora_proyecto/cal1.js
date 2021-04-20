
//show characters on the display.
function valor(x) {
    document.getElementById('display').value += x;
}

// delete the display.
function borrarDisplay(y) {
    document.getElementById('display').value = y;
}

// calculate operations.
function cal_resultado() {
    var result = eval(document.getElementById('display').value); //here eval recolect that operation in the display and execute it.
    document.getElementById('display').value = result;
}