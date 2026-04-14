function calculate(op) {

    let n1 = parseFloat(document.getElementById("num1").value);
    let n2 = parseFloat(document.getElementById("num2").value);

    let result;

    if (op === "+") {
        result = n1 + n2;
    }
    if (op === "-") {
        result = n1 - n2;
    }
    if (op === "*") {
        result = n1 * n2;
    }
    if (op === "/") {
        result = n1 / n2;
    }

    document.getElementById("result").innerHTML = result;
}
