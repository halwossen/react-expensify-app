import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseSummary } from '../../components/ExpenseSummary';

test('should correctly render expense summary with 1 expense', () => {
    const wrapper = shallow(<ExpenseSummary expenseCount={1} expenseTotal={43500}/>);
    expect(wrapper).toMatchSnapshot()
})

test('should correctly render expense summary with multiple expenses', () => {
    const wrapper = shallow(<ExpenseSummary expenseCount={34} expenseTotal={82378500}/>);
    expect(wrapper).toMatchSnapshot()
})