import { connect } from "react-redux";
import AddToDo from '../components/addToDo';

function mapStoreToProps(store) {
    return {
        description: store.app.description,
        dueDate: store.app.dueDate,
        priority: store.app.priority
    }
}

export default connect(mapStoreToProps)(AddToDo);