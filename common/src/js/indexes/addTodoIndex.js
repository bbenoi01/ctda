import { connect } from "react-redux";
import AddToDo from '../components/addToDo';

function mapStoreToProps(store) {
    return {
        description: store.addToDo.description,
        dueDate: store.addToDo.dueDate,
        priority: store.addToDo.priority
    }
}

export default connect(mapStoreToProps)(AddToDo);