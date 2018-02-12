import { types } from '../actions/addToDoAction';

const INITIAL_STATE = {
    description: '',
    dueDate: '',
    priority: '',
    userToDos: []
};

export default function AppReducer(state = INITIAL_STATE, action) {
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

        case types.NEW_TODO: {
            console.log(21,payload);
            return {
                ...state,
                description: payload.description,
                dueDate: payload.dueDate,
                priority: payload.priority
            };
            break;
        }

        case 'USERID_TODOS': {
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