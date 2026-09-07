function calculate(operation) {
    const firstNumber = document.getElementById("number1").value;
    const secondNumber = document.getElementById("number2").value;

    if (firstNumber === "" || secondNumber === "") {
        document.getElementById("result").textContent =
            "Please enter two numbers.";
        return;
    }

    const number1 = Number(firstNumber);
    const number2 = Number(secondNumber);

    let answer;

    if (operation === "add") {
        answer = number1 + number2;
    } else if (operation === "subtract") {
        answer = number1 - number2;
    } else if (operation === "multiply") {
        answer = number1 * number2;
    } else if (operation === "divide") {
        if (number2 === 0) {
            document.getElementById("result").textContent =
                "Cannot divide by zero.";
            return;
        }

        answer = number1 / number2;
    } else if (operation === "modulo") {
        if (number2 === 0) {
            document.getElementById("result").textContent =
                "Cannot divide by zero.";
            return;
        }

        answer = number1 % number2;
    }

    document.getElementById("result").textContent = "Result: " + answer;
}

function clearCalculator() {
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
    document.getElementById("result").textContent = "Result: 0";
}