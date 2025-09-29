transactions = [];
income = 0;
expense = 0;
balance = 0;

function storeTransaction() {
    // alert("form submitted");
    const type = document.getElementById("transactionType").value;
    const amount = parseFloat(document.getElementById("amount").value);
    const description = document.getElementById("description").value;
    const categorySelect = document.getElementById("categoryType");
    const categoryText = categorySelect.options[categorySelect.selectedIndex].text;
    //  alert("type" + type + "amount:" + amount + "description" + description);
    if (type == "1") {
        income += amount;
        document.getElementById("myIncome").textContent = "Total Income: $" + income;
    }
    else {
        expense += amount;
        document.getElementById("totalExpenses").textContent = "Total Expense: $" + expense;
    }
    balance = income - expense;
    document.getElementById("balance").textContent = "Balance: $" + balance;

    const transaction = {
        id: transactions.length + 1,
        type: type,
        amount: amount,
        description: description,
        category: categoryText
    };
    transactions.push(transaction);
    displayTransaction();
    document.getElementById("transaction_form").reset();
}
function displayTransaction() {
    const list = document.getElementById("transaction_list");
    list.innerHTML = ""; // clear old list first

    transactions.forEach(t => {
        const li = document.createElement("li");

        // Make it readable
        li.innerHTML = `${t.type == "1" ? "Income" : "Expense"}<br> -Description: ${t.description}:<br> 
        Amount: $${t.amount}<br>
        Category: ${t.category}`

        list.appendChild(li);
    });
}
