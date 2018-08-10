import React from 'react'; 
import { connect } from 'react-redux'; 
import { DateRangePicker } from 'react-dates'; 
import { setFilterText, sortByDate, sortByAmount, setStartDate, setEndDate} from '../actions/filters'; 

export class ExpenseListFilters extends React.Component { 
    state = {
        calenderFocused: null
    }

    onDatesChange = ({ startDate, endDate }) => {
        this.props.setStartDate(startDate); 
        this.props.setEndDate(endDate); 
    }; 

    onFocusChange = (calenderFocused) => {
        this.setState(() => ({ calenderFocused }))
    }

    onSortChange = (e) => {
        if(e.target.value ==="date"){ 
            this.props.sortByDate(); 
        } else if (e.target.value === "amount") { 
            this.props.sortByAmount(); 
        }
    }

    onTextChange = (e) => {
        this.props.setFilterText(e.target.value); 
    }

    render () {
        return (
            <div>
                <input type="text" value={this.props.filters.text} onChange={this.onTextChange}/>
                <select value={this.props.filters.sortBy} onChange={this.onSortChange}>
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>
                <DateRangePicker 
                    startDate={this.props.filters.startDate}
                    startDateId="start_date_id"
                    endDate={this.props.filters.endDate}
                    endDateId="end_date_id"
                    onDatesChange={this.onDatesChange}
                    focusedInput={this.state.calenderFocused}
                    onFocusChange={this.onFocusChange}
                    showClearDates={true}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}

const mapDispatchToProps = (dispatch) => ({
    setFilterText: (text) => dispatch(setFilterText(text)), 
    sortByDate: () => dispatch(sortByDate()), 
    sortByAmount: () => dispatch(sortByAmount()), 
    setStartDate: (startDate) => dispatch(setStartDate(startDate)), 
    setEndDate: (endDate) => dispatch(setEndDate(endDate)), 
})


export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters); 