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