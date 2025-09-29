transactions = [];
income = 0;
expense = 0;
balance = 0;
categories = {
    Income: ["Salary", "Freelance", "Bonus"],
    Expense: ["Food", "Bills", "Rent", "Shopping", "Transport", "Grocery"]
};

function storeTransaction() {
    const type = document.getElementById("transactionType");
    const categorySelect = document.getElementById("categoryType");
    const categoryText = categorySelect.options[categorySelect.selectedIndex].text;
    const amount = parseFloat(document.getElementById("amount").value);
    const description = document.getElementById("description").value;
    calculateAndDisplayBalance(type.value, amount);

    const transaction = {
        id: transactions.length + 1,
        type: type.value,
        amount: amount,
        description: description,
        category: categoryText
    };
    transactions.push(transaction);
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
function calculateAndDisplayBalance(type, amount) {
    if (type == "Income") {
        income += amount;
        document.getElementById("myIncome").textContent = "Total Income: $" + income;
    }
    else {
        expense += amount;
        document.getElementById("totalExpenses").textContent = "Total Expense: $" + expense;
    }
    balance = income - expense;
    document.getElementById("balance").innerHTML =
        `<span class="${balance > 0 ? "Income" : "Expense"} ">Balance: $${balance}</span>`
}
