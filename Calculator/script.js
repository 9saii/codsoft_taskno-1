let output = '';
let result = document.getElementById('result');

function appendToOutput(value) {
    output += value;
    result.innerText = output;
}

function clearOutput() {
    output = '';
    result.innerText = '0';
}

function calculateResult() {
    try {
        output = eval(output);
        result.innerText = output;
    } catch (error) {
        result.innerText = 'Error';
    }
}

clearOutput();
