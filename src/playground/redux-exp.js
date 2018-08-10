import { createStore, combineReducers } from 'redux'; 
import uuid from 'uuid'; 

// ADD_EXPENSE
const addExpense = ({ 
        description = '', 
        note = '', 
        amount = 0, 
        createdAt = 0
    } = {}) => ({
    type: 'ADD_EXPENSE', 
    expense: {
        id: uuid(), 
        description: description, 
        note: note, 
        amount: amount, 
        createdAt: createdAt
    }
}); 

const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE', 
    id: id
}); 

const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE', 
    id, 
    updates
}); 

const setFilterText = (text = '') => ({
    type: 'EDIT_FILTER_TEXT', 
    text: text
})

const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
})

const sortByDate = () => ({
    type: 'SORT_BY_DATE'
})

const setStartDate = (startDate = undefined) => ({
    type: 'SET_START_DATE', 
    startDate
})

const setEndDate = (endDate = undefined) => ({
    type: 'SET_END_DATE', 
    endDate
})

// Expenses reducer
const expensesReducerDefaultState = []

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type){ 
        case 'ADD_EXPENSE': 
            return [
                ...state, 
                action.expense
            ]
        case 'REMOVE_EXPENSE': 
            return state.filter(({ id }) => id !== action.id); 
        case 'EDIT_EXPENSE': 
            return state.map((expense) => {
                if(expense.id === action.id){
                    return {
                        ...expense, 
                        ...action.updates
                    }
                } else {
                    return expense; 
                }
            })
        default: 
            return state;  
    }
}

// Filters reducer
const filtersReducerDefaultState = {
    text: '', 
    sortBy: 'date', 
    startDate: undefined, 
    endDate: undefined
}

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch(action.type) {
        case 'EDIT_FILTER_TEXT': 
            return {
                ...state, 
                text: action.text
            } 
        case 'SORT_BY_AMOUNT': 
            return {
                ...state,
                sortBy: 'amount'
            }
        case 'SORT_BY_DATE': 
            return {
                ...state,
                sortBy: 'date'
            }
        case 'SET_START_DATE': 
            return {
                ...state, 
                startDate: action.startDate
            }
        case 'SET_END_DATE': 
            return {
                ...state, 
                endDate: action.endDate
            }
        default: 
            return state; 
    }
}

// Get visible expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate; 
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate; 
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch; 
    }).sort((a, b) => {
        if(sortBy === 'date'){
            return a.createdAt - b.createdAt
        } else {
            return a.amount - b.amount
        }
    })
}

// Crete a new store
const store = createStore(combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
})); 

store.subscribe(() => {
    const state = store.getState(); 
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
    console.log(visibleExpenses); 
})

store.dispatch(sortByAmount()); 
const exp1 = store.dispatch(addExpense({ description: 'Rent', amount: 3000, createdAt: 1000 })); 
const exp2 = store.dispatch(addExpense({ description: 'Coffee', amount: 300, createdAt: -1000 }));
const exp3 = store.dispatch(addExpense({ description: 'spomn', amount: 450, createdAt: 10000 }));


// store.dispatch(removeExpense({ id: exp1.expense.id }))

// store.dispatch(editExpense(exp2.expense.id, { amount: 500 })); 

//store.dispatch(setFilterText("rent")); 
// store.dispatch(setFilterText()); s

// store.dispatch(sortByAmount()); 
// store.dispatch(sortByDate()); 

//store.dispatch(setStartDate(100)); 
//store.dispatch(setFilterText('re')); 
// store.dispatch(setStartDate()); 

// store.dispatch(setEndDate(1250)); 
// store.dispatch(setEndDate());



const demoState = {
    expenses: [{
        id: 'alksdfjasdf', 
        description: 'Jan Rent', 
        note: 'Final payment', 
        amount: 54500, 
        createdAt: 0
    }],
    filters: {
        text: 'rent', 
        sortBy: 'amount', // date or amount
        startDate: undefined, 
        endDate: undefined
    }
}