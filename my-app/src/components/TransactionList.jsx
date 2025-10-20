import React from "react";

function TransactionList({ transactions, setTransactions }) {
    const clearHistory = () => {
        setTransactions([]);
    }
    return (
        <div>
            <div className="col-6 form mx-auto">
                <div className="d-flex justify-content-between align-items-center">
                    <h2 className="h2">Transaction History</h2>
                    <button type="button" onClick={clearHistory} className="btn btn-danger btn-sm">Clear History</button>
                </div>

                <ul>
                    {transactions.map(t => (
                        <li key={t.id}>
                            <span style={{ color: t.type === "Income" ? "green" : "red" }}>
                                {t.type}
                            </span>{" "}
                            - {t.description} (${t.amount}) [{t.category}]
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
export default TransactionList;