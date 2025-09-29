transactions = [];

categories = {
    Income: ["Salary", "Freelance", "Bonus"],
    Expense: ["Food", "Bills", "Rent", "Shopping", "Transport", "Grocery"]
};
window.onload = function () {
    const saved = localStorage.getItem("transactions");
    if (saved) {
        transactions = JSON.parse(saved); // restore
        displayTransaction(); // show them again
        calculateAndDisplayBalance();
    }
};
function storeTransaction() {
    const type = document.getElementById("transactionType");
    const categorySelect = document.getElementById("categoryType");
    const categoryText = categorySelect.options[categorySelect.selectedIndex].text;
    const amount = parseFloat(document.getElementById("amount").value);
    const description = document.getElementById("description").value;

    const transaction = {
        id: transactions.length + 1,
        type: type.value,
        amount: amount,
        description: description,
        category: categoryText
    };
    transactions.push(transaction);
    calculateAndDisplayBalance();

    localStorage.setItem("transactions", JSON.stringify(transactions));
    displayTransaction();
    document.getElementById("transaction_form").reset();
}
function displayCategory() {
    const type = document.getElementById("transactionType");
    const categorySelect = document.getElementById("categoryType");
    const selectedType = type.value;
    categorySelect.innerHTML = "<option value=''>Select Category</option>";
    if (selectedType && categories[selectedType]) {
        categories[selectedType].forEach(cat => {
            const option = document.createElement("option");
            option.value = cat;
            option.text = cat;
            categorySelect.appendChild(option);
        });
    }

}
function displayTransaction() {
    const list = document.getElementById("transaction_list");
    list.innerHTML = ""; // clear old list first

    transactions.forEach(t => {
        const li = document.createElement("li");

        // Make it readable
        li.innerHTML = `<span class="${t.type}">
        ${t.type}</span><br> 
        -Description: ${t.description}<br> 
        Amount: $${t.amount}<br>
        Category: ${t.category}`


        list.appendChild(li);
    });
}
function calculateAndDisplayBalance() {
    let income = 0;
    let expense = 0;
    let balance = 0;
    for (let i = 0; i < transactions.length; i++) {
        if (transactions[i].type == "Income") {
            income += transactions[i].amount;
            document.getElementById("myIncome").textContent = "Total Income: $" + income;
        }
        else {
            expense += transactions[i].amount;
            document.getElementById("totalExpenses").textContent = "Total Expense: $" + expense;
        }
    }
    balance = income - expense;
    document.getElementById("balance").innerHTML =
        `<span class="${balance > 0 ? "Income" : "Expense"} ">Balance: $${balance}</span>`
}
