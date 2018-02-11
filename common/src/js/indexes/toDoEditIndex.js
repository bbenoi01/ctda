import { connect } from "react-redux";
import ToDoEdit from '../components/toDoEdit';

function mapStoreToProps(store) {
    return {
        userToDos: store.app.userToDos
    }
}

export default connect(mapStoreToProps)(ToDoEdit);