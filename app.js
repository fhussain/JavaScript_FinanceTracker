
document.querySelector("#addExpense").addEventListener("click", checkNumber);
document.querySelector("#addIncome").addEventListener("click", setIncome);

expenses = [];
income = 0;
totalExpense = 0;
function setIncome() {
    let value = document.getElementById("income").value;
    if (value > 0) {
        income = parseFloat(value);
        document.getElementById("myIncome").textContent = "Total Income $" + income;
        setBalance();
    }
    else {
        alert("Please enter a positive number!");
    }
    document.getElementById("income").value = ""; // clear input
}
function checkNumber() {
    let value = document.getElementById("expense").value;
    if (value > 0) {
        expenses.push(parseFloat(value));
        displayNumbers();
        calculateTotalExpense();
        setBalance();
    } else {
        alert("Please enter a positive number!");
    }
    document.getElementById("expense").value = ""; // clear input
}
function displayNumbers() {
    let container = document.getElementById("cardContainer");
    container.innerHTML = ""; // clear previous cards

    expenses.forEach((exp, index) => {
        let card = document.createElement("div");
        card.classList.add("card", "text-center", "shadow-sm", "m-2");
        card.style.width = "8rem";

        card.innerHTML = `
            <div class="card-body d-flex justify-content-between align-items-center">
            <h5 class="card-title mb-0">$${exp}</h5>
            <button id="closeButton" type="button" class="btn btn-sm btn-danger" data-index="${index}">×</button>
            </div>
        `;
        container.appendChild(card);
    });
    /* */

    document.querySelectorAll("#closeButton").forEach(btn => {
        btn.addEventListener("click", function () {
            let index = this.getAttribute("data-index");
            expenses.splice(index, 1); // remove from array
            displayNumbers(); // refresh cards
        });
    });
}
function calculateTotalExpense() {
    let sum = 0;
    for (let i = 0; i < expenses.length; i++) {
        sum += expenses[i];
    }
    totalExpense = sum;
    document.getElementById("totalExpenses").textContent = "Total Expense $" + sum;
}
function setBalance() {
    let balance = income - totalExpense;
    document.getElementById("balance").textContent = "Balance $" + balance;

}
