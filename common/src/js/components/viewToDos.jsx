import React, { Component } from 'react';
import {
    userToDos
} from '../actions/viewToDosAction';
import Welcome from '../indexes/welcomeIndex';
import ToDoList from '../indexes/toDoListIndex';

export default class ViewToDos extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        const { dispatch } = this.props;
        dispatch(userToDos());
    }

    render() {
        const { userToDos } = this.props;

        if (userToDos.length == 0) {
            return (
                <div className="col l7 s12">
                    <div className="card blue-grey darken-1">
                        <div className="card-content" id='todo-view'>
                            <span className="card-title center"><b>View ToDos</b></span>
                            <Welcome />
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="col l7 s12">
                    <div className="card blue-grey darken-1">
                        <div className="card-content" id='todo-view'>
                            <span className="card-title center"><b>View ToDos</b></span>
                            <ToDoList />
                        </div>
                    </div>
                </div>
            )
        }

    }
}