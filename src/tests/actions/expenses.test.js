import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('should set up remove expense action object', () => {
    const action = removeExpense({ id: '2345sfe' });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '2345sfe'
    })
})

test('should set up edit expense action object', () => {
    const action = editExpense('1456le', {note: 'New note value'});
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id:'1456le', 
        updates: {
            note: 'New note value'}
    })
})

test('should set up add expense object with provided values', () => {
    const expenseData = {
        description: 'Rent',
        amount: 123300,
        createdAt: 2000,
        note: 'This was last month rent'
    };
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense:{
            ...expenseData,
            id: expect.any(String)
        }
    })
})

test('should set up add expense object with default values', () => {
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: '',
            amount: 0,
            createdAt: 0,
            note: ''
        }
    })
})


