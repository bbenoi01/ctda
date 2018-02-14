import { connect } from "react-redux";
import App from '../app';

function mapStoreToProps(store) {
    return {
        toDos: store.app.toDos
    }
}

export default connect(mapStoreToProps)(App);