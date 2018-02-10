import { types } from '../actions/viewToDosAction';

const INITIAL_STATE = {
    userToDos: []
};

export default function ViewToDosReducer(state = INITIAL_STATE, action) {
    const { type, payload } = action;
    switch (type) {
        case types.USERID_TODOS: {
            console.log(100,payload);
            return {
                ...state,
                userToDos: payload
                
            };
            break;
        }
        default: return state;
    }
};