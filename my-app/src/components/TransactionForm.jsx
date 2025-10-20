import React, { useState } from "react";

function TransactionForm({ setTransactions, transactions }) {
    const [type, setType] = useState("Income");
    const categories = {
        Income: ["Salary", "Freelance", "Bonus"],
        Expense: ["Food", "Bills", "Rent", "Grocery"]
    };
    const [category, setCategory] = useState("");
    const [amount, setAmount] = useState("");
    const [description, setDescription] = useState("");
    const addTransaction = (e) => {
        e.preventDefault();
        const newTransaction = {
            id: transactions.length + 1,
            type,
            category,
            amount: parseFloat(amount),
            description
        }
        setTransactions([...transactions, newTransaction]);
        setType("Income");
        setCategory("");
        setAmount("");
        setDescription("");

    };
    return (


        <div>
            <form className="form col-6" onSubmit={addTransaction}>
                <div className="form-group row input-group mx-auto mb-3" style={{ width: "300px" }} >
                    <h2 class="h2">Add Transaction</h2>
                    <select value={type} onChange={e => setType(e.target.value)}>
                        <option value="Income">Income</option>
                        <option value="Expense">Expense</option>
                    </select>
                </div>
                <div className="w-100"></div>
                <div className="form-group row input-group mx-auto mb-3" style={{ width: "300px" }} >
                    <select value={category} onChange={e => setCategory(e.target.value)}>
                        <option value="">Select Category</option>
                        {(categories[type] || []).map(cat => (
                            <option key={cat} value={cat}>{cat}</option>
                        ))}
                    </select>
                </div>
                <div className="w-100"></div>
                <div className="form-group row input-group mx-auto mb-3" style={{ width: "300px" }} >
                    <input
                        type="number"
                        value={amount}
                        onChange={e => setAmount(e.target.value)}
                        placeholder="Amount"
                    />
                </div>
                <div className="w-100"></div>
                <div className="form-group row input-group mx-auto mb-3" style={{ width: "300px" }} >
                    <input
                        type="text"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                        placeholder="Description"
                    />
                </div>
                <div className="w-100"></div>
                <div className="form-group row input-group mx-auto mb-3" style={{ width: "1000px" }} >
                    <button type="submit">Add Transaction</button>
                </div>
            </form>
        </div>
    )
}
export default TransactionForm;