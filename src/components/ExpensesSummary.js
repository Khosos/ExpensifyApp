import React from 'react'; 
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses'; 
import getExpensesTotal from '../selectors/expenses-total'; 
import numeral from 'numeral'; 

export const ExpensesSummary = ({expensesCount, expensesTotal}) => {
    const expenseWord = expensesCount === 1 ? 'expense' : 'expenses'
    return (
    <div>
        <p> You have {expensesCount} {expenseWord} totaling {numeral(expensesTotal/100).format('$0,0.00')} </p>
    </div>
    )
}

const mapStateToProps = (state, props) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters)
    return { 
        expensesCount: visibleExpenses.length, 
        expensesTotal: getExpensesTotal(visibleExpenses)
    }
}

export default connect(mapStateToProps)(ExpensesSummary); 
