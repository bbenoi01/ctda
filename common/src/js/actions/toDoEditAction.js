import axios from 'axios';

export const types = {
    USER_TODOS: 'USER_TODOS',
    UPDATE_DESC: 'UPDATE_DESC',
    UPDATE_DUE_DATE: 'UPDATE_DUE_DATE',
    UPDATE_PRIORITY: 'UPDATE_PRIORITY'
}

export function userToDos() {
    return (dispatch) => {
        axios.get('http://localhost:3000/api/todo-items')
        .then(res => {
            dispatch({
                type: types.USER_TODOS,
                payload: res.data
            })
        })
    }
}

export function descEdit(value) {
    return {
        type: types.UPDATE_DESC,
        payload: value
    }
}

export function dueDateEdit(value) {
    return {
        type: types.UPDATE_DUE_DATE,
        payload: value
    }
}

export function priorityEdit(value) {
    return {
        type: types.UPDATE_PRIORITY,
        payload: value
    }
}

export function editToDo(description, dueDate, priority, id) {
    return (dispatch) => {
        axios.patch(`http://localhost:3000/api/todo-items/${id}`, {description, dueDate, priority, 'editEnabled': false})
        .then(res => {
            dispatch(userToDos())
        })
        .catch(err => console.log('err'))
    }
}