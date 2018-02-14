import axios from 'axios';

export const types = {
    USER_TODOS: 'USER_TODOS'
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

export function removeItem(id) {
    console.log(`http://localhost:3000/api/todo-items/${id}`);
    return (dispatch) => {
        axios.delete(`http://localhost:3000/api/todo-items/${id}`)
        .then(res => {
            dispatch(userToDos())
        })
        .catch(err => console.log('err'))
        
    }
}

export function enableEdit(id, contentEditable) {
    console.log(`http://localhost:3000/api/todo-items/${id}`, {'editEnabled': 'editEnabled'});
    if(contentEditable === 'false') {
        return (dispatch) => {
            axios.patch(`http://localhost:3000/api/todo-items/${id}`, {'editEnabled': true})
            .then(res => {
                dispatch(userToDos())
            })
            .catch(err => console.log('err'))
        }        
    } else {
        return (dispatch) => {
            axios.patch(`http://localhost:3000/api/todo-items/${id}`, {'editEnabled': false})
            .then(res => {
                dispatch(userToDos())
            })
            .catch(err => console.log('err'))            
        }
    }
}