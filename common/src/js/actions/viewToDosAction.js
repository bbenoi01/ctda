import axios from 'axios';

export const types = {
    USERID_TODOS: 'USERID_TODOS'
}

export function userToDos() {
    return (dispatch) => {
        axios.get('http://localhost:3000/api/todo-items')
            .then(res => {
                dispatch({
                    type: types.USERID_TODOS,
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