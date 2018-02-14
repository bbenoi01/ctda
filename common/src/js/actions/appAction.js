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
