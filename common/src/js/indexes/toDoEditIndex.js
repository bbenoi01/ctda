import { connect } from "react-redux";
import ToDoEdit from '../components/toDoEdit';

function mapStoreToProps(store) {
    return {
        userToDos: store.app.userToDos,
        description: store.toDoEdit.descEdit,
        dueDate: store.toDoEdit.dueDateEdit,
        priority: store.toDoEdit.priorityEdit,
        editable: store.app.editable
    }
}

export default connect(mapStoreToProps)(ToDoEdit);