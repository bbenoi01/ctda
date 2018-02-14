import React, { Component } from 'react';
import {
    userToDos
} from './actions/appAction';
import Navbar from './indexes/navbarIndex';
import Welcome from './indexes/welcomeIndex';
import AddToDo from './indexes/addToDoIndex';
import ToDoList from './indexes/toDoList';

export default class App extends Component {

    componentWillMount() {
        const { dispatch } = this.props;
        dispatch(userToDos());
    }

    render() {
        const { toDos } = this.props;
        console.log(toDos);

        if (toDos.length == 0) {
            var toDoView = <Welcome />
        } else {
            var toDoView = <ToDoList />
        }

        return (
            <div>
                <Navbar />
                <div className="container">
                    <div className="row">
                        <div className="col s12">
                            <h4><b>Simple ToDo App</b></h4>
                            <h5><small>Keep track of your day</small></h5>
                            <hr/>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <AddToDo />
                        <div className="col l7 s12">
                            <div className="card blue-grey darken-1">
                                <div className="card-content" id='todo-view'>
                                    <span className="card-title center"><b>View ToDos</b></span>
                                    {toDoView}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}