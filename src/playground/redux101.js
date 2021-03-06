import { createStore } from 'redux'; 

const incrementCount = ({ incrementBy = 1 } = {}) => ({
        type: 'INCREMENT', 
        incrementBy: incrementBy
}); 

const decrementCount = ({ decrementBy = 1 }) => ({
    type: 'DECREMENT',
    decrementBy: decrementBy
})

const setCount = ({count}) => ({
    type: 'SET', 
    count: count
}); 

const resetCount = () => ({
    type: 'RESET'
})

// Reducers 
const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT': 
            return {
                count: state.count + action.incrementBy
            }; 
        case 'DECREMENT': 
            return {
                count: state.count - action.decrementBy
            }; 
        case 'SET': 
            return {
                count: action.count
            }
        case 'RESET': 
            return {
                count: 0
            }
        default: 
            return state; 
    } 
}; 
const store = createStore(countReducer)

const unsub = store.subscribe(() => {
    console.log(store.getState()); 
})

store.dispatch(incrementCount({ incrementBy: 5 }));  

// Increment count
store.dispatch(incrementCount()); 

// Decrement count
store.dispatch(decrementCount({ decrementBy: 10 })); 

// Decrement count
store.dispatch(resetCount()); 

store.dispatch(setCount({count: 1023})); 


