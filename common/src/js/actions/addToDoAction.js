import axios from 'axios';

export const types = {
    CREATE_DESC: 'CREATE_DESC',
    CREATE_DUE_DATE: 'CREATE_DUE_DATE',
    CREATE_PRIORITY: 'CREATE_PRIORITY',
    NEW_TODO: 'NEW_TODO'
}

export function createDescText(value) {
    return {
        type: types.CREATE_DESC,
        payload: value
    };
}

export function createDueDate(value) {
    return {
        type: types.CREATE_DUE_DATE,
        payload: value
    };
}

export function createPriority(value) {
    return {
        type: types.CREATE_PRIORITY,
        payload: value
    }
}

export function createNewToDo(description, dueDate, priority) {
    console.log(42, {description, dueDate, priority});
    return (dispatch) => {
        dispatch({
            type: types.NEW_TODO,
            payload: axios.post('http://localhost:3000/api/todo-items', {description, dueDate, priority})
            .then(results => { return results.data; alert('Add successful') })
            .catch(err => console.log(err))
        })
    }
}