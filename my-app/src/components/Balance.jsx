function Balance({ transactions }) {
    const income = transactions
        .filter(t => t.type === "Income")
        .reduce((acc, t) => acc + t.amount, 0);
    const expense = transactions
        .filter(t => t.type === "Expense")
        .reduce((acc, t) => acc + t.amount, 0);
    return (
        <div>
            <p className="header2">Income: ${income}</p>
            <p className="header2">Expense: ${expense}</p>
            <p className="header2"><strong>Balance: ${income - expense}</strong></p>
        </div>
    );
}
export default Balance;