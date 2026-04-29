let balance = 1000;

function updateBalance() {
    document.getElementById("balance").innerText = "Rs" +  balance;
}

function checkBalance() {
    alert("Your current balance is Rs" +  balance);
}

function depositMoney() {
    let amount = parseFloat(prompt("Enter amount to deposit:"));

    if (amount > 0) {
        balance += amount;
        updateBalance();
        alert("Deposit successful!");
    } else {
        alert("Invalid amount!");
    }
}

function withdrawMoney() {
    let amount = parseFloat(prompt("Enter amount to withdraw:"));

    if (amount > 0 && amount <= balance) {
        balance -= amount;
        updateBalance();
        alert("Withdrawal successful!");
    } else {
        alert("Insufficient balance or invalid amount!");
    }
}