import React from 'react'; 
import { shallow } from 'enzyme'; 
import { ExpenseListFilters } from '../../components/ExpenseListFilters'; 
import { filters, altFilters } from '../fixtures/filters'; 
import moment from 'moment'; 

let setFilterText, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper; 

beforeEach(() => {
    setFilterText = jest.fn();  
   sortByDate = jest.fn(); 
   sortByAmount = jest.fn(); 
   setStartDate = jest.fn(); 
   setEndDate = jest.fn(); 

   wrapper = shallow(<ExpenseListFilters
        filters={filters}
        setFilterText={setFilterText}
        sortByDate={sortByDate}
        sortByAmount={sortByAmount}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
        />)
}); 

test('should render ExpenseListFilters correctly', () => {
    expect(wrapper).toMatchSnapshot(); 
}); 

test('should render ExpenseListFilters with alt data correctly', () => {
    wrapper.setProps({
        filters: altFilters
    })
    expect(wrapper).toMatchSnapshot(); 
}); 

test('should handle text change', () => {
    const e = {
        target: {
            value: 'something'
        }
    }
    wrapper.find('input').prop('onChange')(e)
    expect(setFilterText).toHaveBeenLastCalledWith(e.target.value); 
}); 

test('should handle sort by date', () => {
    const e = {
        target: {
            value: 'date'
        }
    }
    wrapper.find('select').prop('onChange')(e)
    expect(sortByDate).toHaveBeenCalled(); 
});

test('should handle sort by date', () => {
    const e = {
        target: {
            value: 'amount'
        }
    }
    wrapper.find('select').prop('onChange')(e)
    expect(sortByAmount).toHaveBeenCalled(); 
});

test('should handle date changes', () => {
    const startDate = moment(0); 
    const endDate = moment(0).add(3, 'days'); 
    wrapper.find('withStyles(DateRangePicker)').prop('onDatesChange')({ startDate, endDate })
    expect(setStartDate).toHaveBeenCalledWith(startDate); 
    expect(setEndDate).toHaveBeenCalledWith(endDate); 
})

test('should handle focus change', () => { 
    const focus = 'startDate'; 
    wrapper.find('withStyles(DateRangePicker)').prop('onFocusChange')(focus)
    expect(wrapper.state('calenderFocused')).toBe(focus); 
})
