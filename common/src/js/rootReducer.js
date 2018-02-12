import { combineReducers } from "redux";
import AppReducer from './reducers/appReducer';
import ToDoEditReducer from './reducers/toDoEditReducer';

const rootReducer = combineReducers({
    app: AppReducer,
    toDoEdit: ToDoEditReducer

});

export default rootReducer;