import React from 'react'; 
import ExpenseDashboardPage from '../../components/NotFound';
import { shallow } from 'enzyme'; 

test('should render ExpenseDashboard Page correctly', () => {
    const wrapper = shallow(<ExpenseDashboardPage />); 
    expect(wrapper).toMatchSnapshot(); 
}); 