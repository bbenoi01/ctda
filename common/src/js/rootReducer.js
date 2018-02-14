import { combineReducers } from "redux";
import AppReducer from './reducers/appReducer';
import AddToDoReducer from './reducers/addToDoReducer';
import ToDoEditReducer from './reducers/toDoEditReducer';

const rootReducer = combineReducers({
    app: AppReducer,
    addToDo: AddToDoReducer,
    toDoEdit: ToDoEditReducer

});

export default rootReducer;