import { combineReducers } from "redux";
import AddToDoReducer from './reducers/addToDoReducer';
import ViewToDosReducer from './reducers/viewToDosReducer';

const rootReducer = combineReducers({
    addToDo: AddToDoReducer,
    viewToDos: ViewToDosReducer

});

export default rootReducer;