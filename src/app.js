import React from 'react'; 
import ReactDOM from 'react-dom'; 
import { Provider } from 'react-redux'; 
import AppRouter from './routers/AppRouter'; 
import configureStore from './store/configureStore'; 
import { addExpense, removeExpense, editExpense } from './actions/expenses'; 
import { setFilterText, sortByAmount, sortByDate, setStartDate, setEndDate } from './actions/filters'
import 'normalize.css/normalize.css'; 
import './styles/styles.scss'; 
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore(); 

store.subscribe(() => {
    console.log(store.getState()); 
})

store.dispatch(addExpense({description: 'water bill', amount: 400000, createdAt: 200}))
store.dispatch(addExpense({description: 'gas bill', amount: 90000, createdAt: 1000}))
store.dispatch(addExpense({description: 'rent', amount: 8000, }))

const jsx = (
    <Provider store={store}> 
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById("app"));
