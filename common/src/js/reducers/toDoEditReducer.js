import { types } from '../actions/toDoEditAction';

const INITIAL_STATE = {
    descEdit: '',
    dueDateEdit: '',
    priorityEdit: ''
};

export default function ToDoEditReducer(state = INITIAL_STATE, action) {
    const { type, payload } = action;
    switch (type) {
        case types.UPDATE_DESC: {
            return {
                ...state,
                descEdit: payload
            };
            break;
        }

        case types.UPDATE_DUE_DATE: {
            return {
                ...state,
                dueDateEdit: payload
            };
            break;
        }

        case types.UPDATE_PRIORITY: {
            return {
                ...state,
                priorityEdit: payload
            };
            break;
        }

        default: return state;
    }
};