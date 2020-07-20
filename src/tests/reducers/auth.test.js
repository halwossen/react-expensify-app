
import authReducer from '../../reducers/auth';

test('should set uid for login', () => {
    const action = {
        type: 'LOGIN',
        uid: 'wilfalfjl'
    }
    const state = authReducer(undefined, action)
    
    expect(state.uid).toEqual(action.uid)
})

test('should set uid for logout', () => {
    const action = {
        type: 'LOGIN',
    }
    const state = authReducer({ uid: 'alskdjf3' }, action)
    
    expect(state).toEqual({ })
})
