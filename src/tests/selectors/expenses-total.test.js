import getExpensesTotal from '../../selectors/expenses-total'; 
import expenses from '../fixtures/expenses'; 

test('should correctly add up to multiple expenses', () => {
    const total = getExpensesTotal(expenses); 
    expect(total).toBe(114195); 
}); 

test('should correctly one expenses', () => {
    const total = getExpensesTotal([expenses[0]]); 
    expect(total).toBe(195); 
}); 

test('should correctly no expenses', () => {
    const total = getExpensesTotal([]); 
    expect(total).toBe(0); 
}); 