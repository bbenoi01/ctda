import { connect } from "react-redux";
import ViewToDos from '../components/viewToDos';

function mapStoreToProps(store) {
    return {
        userToDos: store.viewToDos.userToDos,
        dueDate: store.viewToDos.dueDate,
        priority: store.viewToDos.priority
    }
}

export default connect(mapStoreToProps)(ViewToDos);