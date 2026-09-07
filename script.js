function calculate(operation) {
    const firstNumber = document.getElementById("number1").value;
    const secondNumber = document.getElementById("number2").value;

    if (operation === "square") {
        if (firstNumber === "") {
            document.getElementById("result").textContent =
                "Please enter the first number.";
            return;
        }

        const number1 = Number(firstNumber);
        const answer = number1 * number1;
        document.getElementById("result").textContent = `Square: ${answer}`;
        return;
    }

    if (firstNumber === "" || secondNumber === "") {
        document.getElementById("result").textContent =
            "Please enter two numbers.";
        return;
    }

    const number1 = Number(firstNumber);
    const number2 = Number(secondNumber);

    let answer;
    let operationLabel;

    if (operation === "add") {
        answer = number1 + number2;
        operationLabel = "Add";
    } else if (operation === "subtract") {
        answer = number1 - number2;
        operationLabel = "Subtract";
    } else if (operation === "multiply") {
        answer = number1 * number2;
        operationLabel = "Multiply";
    } else if (operation === "divide") {
        if (number2 === 0) {
            document.getElementById("result").textContent =
                "Cannot divide by zero.";
            return;
        }

        answer = number1 / number2;
        operationLabel = "Divide";
    } else if (operation === "Modulo") {
        if (number2 === 0) {
            document.getElementById("result").textContent =
                "Cannot divide by zero.";
            return;
        }

        answer = number1 % number2;
        operationLabel = "Modulo";
    }

    document.getElementById("result").textContent = `${operationLabel}: ${answer}`;
}

function clearCalculator() {
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
    document.getElementById("result").textContent = "Result: 0";
}