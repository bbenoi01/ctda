import { types } from '../actions/addToDoAction';

const INITIAL_STATE = {
    description: '',
    dueDate: '',
    priority: ''
};

export default function AddToDoReducer(state = INITIAL_STATE, action) {
    const { type, payload } = action;
    switch (type) {
        case types.CREATE_DESC: {
            return {
                ...state,
                description: payload
            };
            break;
        }

        case types.CREATE_DUE_DATE: {
            return {
                ...state,
                dueDate: payload
            };
            break;
        }

        case types.CREATE_PRIORITY: {
            return {
                ...state,
                priority: payload
            };
            break;
        }
        
        default: return state;
    }
};