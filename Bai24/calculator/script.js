let display = document.getElementById("display");

function appendValue(value) {
    if (display.innerText === "0" && value !== ".") {
        display.innerText = value;
    } else {
        display.innerText += value;
    }
}

function clearDisplay() {
    display.innerText = "0";
}

function calculate() {
    let expression = display.innerText.replace("^", "**");
    try {
        let result = eval(expression);
        display.innerText = result % 1 === 0 ? result : result.toFixed(6);
    } catch (e) {
        display.innerText = "Error";
    }
}