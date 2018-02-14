import { connect } from "react-redux";
import ToDoEdit from '../components/toDoEdit';

function mapStoreToProps(store) {
    return {
        description: store.toDoEdit.descEdit,
        dueDate: store.toDoEdit.dueDateEdit,
        priority: store.toDoEdit.priorityEdit
    }
}

export default connect(mapStoreToProps)(ToDoEdit);