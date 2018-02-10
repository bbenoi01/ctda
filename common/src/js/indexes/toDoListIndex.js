import { connect } from "react-redux";
import ToDoList from '../components/toDoList';

function mapStoreToProps(store) {
    return {
        userToDos: store.viewToDos.userToDos
    }
}

export default connect(mapStoreToProps)(ToDoList);