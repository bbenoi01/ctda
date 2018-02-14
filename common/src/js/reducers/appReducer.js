import { types } from '../actions/appAction';

const INITIAL_STATE = {
    toDos: []
};

export default function AppReducer(state = INITIAL_STATE, action) {
    const { type, payload } = action;
    switch (type) {
        case types.USER_TODOS: {
            console.log(100,payload);
            return {
                ...state,
                toDos: payload
            };
            break;
        }
        
        default: return state;
    }
};