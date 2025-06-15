// Arithmetic operation functions
function add(number1, number2) {
    return number1 + number2;
}

function subtract(number1, number2) {
    return number1 - number2;
}

function multiply(number1, number2) {
    return number1 * number2;
}

function divide(number1, number2) {
    // Handle division by zero
    if (number2 === 0) {
        return "Error: Cannot divide by zero";
    }
    return number1 / number2;
}

// Helper function to get input values and parse as float
function getInputValues() {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    return { number1, number2 };
}

// Update the result display
function displayResult(result) {
    document.getElementById('calculation-result').textContent = result;
}

// Event listeners for buttons
document.getElementById('add').addEventListener('click', function() {
    const { number1, number2 } = getInputValues();
    const result = add(number1, number2);
    displayResult(result);
});

document.getElementById('subtract').addEventListener('click', function() {
    const { number1, number2 } = getInputValues();
    const result = subtract(number1, number2);
    displayResult(result);
});

document.getElementById('multiply').addEventListener('click', function() {
    const { number1, number2 } = getInputValues();
    const result = multiply(number1, number2);
    displayResult(result);
});

document.getElementById('divide').addEventListener('click', function() {
    const { number1, number2 } = getInputValues();
    const result = divide(number1, number2);
    displayResult(result);
});
