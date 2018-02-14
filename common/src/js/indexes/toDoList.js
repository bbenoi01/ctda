import { connect } from "react-redux";
import ToDoList from '../components/toDoList';

function mapStoreToProps(store) {
    return {
        toDos: store.app.toDos
    }
}

export default connect(mapStoreToProps)(ToDoList);