import React from 'react'; 
import { shallow } from 'enzyme'; 
import { ExpensesSummary } from '../../components/ExpensesSummary'; 
import expenses from '../fixtures/expenses'; 

test('should render ExpensesSummary with single expense', () => {
    const wrapper = shallow(<ExpensesSummary expensesCount={1} expensesTotal={55}/>)
    expect(wrapper).toMatchSnapshot();
})

test('should render ExpensesSummary with multiple expenses', () => {
    const wrapper = shallow(<ExpensesSummary expensesCount={2} expensesTotal={55}/>)
    expect(wrapper).toMatchSnapshot();
})