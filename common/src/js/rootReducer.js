import { combineReducers } from "redux";
import AppReducer from './reducers/appReducer';
// import AddToDoReducer from './reducers/addToDoReducer';
// import ViewToDosReducer from './reducers/viewToDosReducer';

const rootReducer = combineReducers({
    app: AppReducer

});

export default rootReducer;