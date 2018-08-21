const getExpensesTotal = (expenses) => {
    if (expenses.length === 0){ 
        return 0
    }
    return expenses.reduce(
        (acc, cur) =>  acc + cur.amount, 
        0
    );
}

export default getExpensesTotal; 