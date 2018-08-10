import { addExpense, removeExpense, editExpense } from "../../actions/expenses"; 

test('should setup remove expense action object', () => {
    const action = removeExpense({ id: "123abc" }); 
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE', 
        id: '123abc'
    })
})

test('should setup edit expense action object', () => {
    const action = editExpense("12ab", { note: 'New Note value', amount: 12}); 
    expect(action).toEqual({
        type: 'EDIT_EXPENSE', 
        id: '12ab', 
        updates: {
            note: 'New Note value', 
            amount: 12
        }
    })
})

test('should setup add expense action object with provided values', () => {
    const expenseData = {
        description: 'Rent', 
        amount: 109500, 
        createdAt: 1000, 
        note: 'Last months rent'
    }

    const action = addExpense(expenseData); 
    expect(action).toEqual({
        type: 'ADD_EXPENSE', 
        expense: {
            ...expenseData, 
            id: expect.any(String)
        }
    })
})

test('should setup add expense action object with default values', () => {
      const action =  addExpense(); 
      expect(action).toEqual({
        type: 'ADD_EXPENSE', 
        expense: {
            description: '', 
            note: '', 
            amount: 0, 
            createdAt: 0, 
            id: expect.any(String)
        }
      })
})