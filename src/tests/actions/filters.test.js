import { setStartDate, setEndDate, sortByAmount, sortByDate, setFilterText } from '../../actions/filters'; 
import moment from 'moment'; 

test('should generate set start date action object', () => {
    const action = setStartDate(moment(0)); 
    expect(action).toEqual({
        type: 'SET_START_DATE', 
        startDate: moment(0)
    })
}); 

test('should generate end start date action object', () => {
    const action = setEndDate(moment(0)); 
    expect(action).toEqual({
        type: 'SET_END_DATE', 
        endDate: moment(0)
    })
}); 

test('should generate sort by amount action object', () => {
    const action = sortByAmount(); 
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT'
    })
})

test('should generate sort by date action object', () => {
    const action = sortByDate(); 
    expect(action).toEqual({
        type: 'SORT_BY_DATE'
    })
})

test('should generate setFilterText action object with provided values', () => {
    const action = setFilterText("rent"); 
    expect(action).toEqual({
        type: 'EDIT_FILTER_TEXT', 
        text: 'rent'
    })
})

test('should generate setFilterText action object with default values', () => {
    const action = setFilterText(); 
    expect(action).toEqual({
        type: 'EDIT_FILTER_TEXT', 
        text: ''
    })
})