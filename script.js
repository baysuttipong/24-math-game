let numbers = [];

function generateNumbers() {
    numbers = Array.from({ length: 4 }, () => Math.floor(Math.random() * 10));
    document.getElementById("num1").textContent = numbers[0];
    document.getElementById("num2").textContent = numbers[1];
    document.getElementById("num3").textContent = numbers[2];
    document.getElementById("num4").textContent = numbers[3];
    document.getElementById("result").textContent = "";
    clearExpression();
}

function addToExpression(value) {
    document.getElementById("expression").value += value;
}

function clearExpression() {
    document.getElementById("expression").value = "";
}

function checkSolution() {
    const expression = document.getElementById("expression").value;
    try {
        const result = eval(expression);
        if (result === 24 && isUsingAllNumbers(expression)) {
            document.getElementById("result").textContent = "ถูกต้อง! ได้ 24";
        } else {
            document.getElementById("result").textContent = "ไม่ถูกต้อง! ลองอีกครั้ง";
        }
    } catch (error) {
        document.getElementById("result").textContent = "สมการไม่ถูกต้อง!";
    }
}

function isUsingAllNumbers(expression) {
    const numStr = numbers.map(String);
    for (const num of numStr) {
        const regex = new RegExp(num);
        if (!regex.test(expression)) return false;
    }
    return true;
}

window.onload = generateNumbers;
