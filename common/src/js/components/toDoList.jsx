import React, { Component } from 'react';
import {
    userToDos
} from '../actions/viewToDosAction';
import Welcome from '../indexes/welcomeIndex';


export default class ToDoList extends Component {
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
                            <ul id='list'>
                                {userToDos.map(ToDos =>
                                    <li style={{marginBottom: '0'}} key={ToDos.id} className={ToDos.priority}>
                                        <p>
                                            <input type="checkbox" />
                                            <label htmlFor=""></label>
                                        </p>
                                        <div className="right" style={{display: 'inline'}}>
                                            Due: {ToDos.dueDate}
                                            <a style={{marginRight: '7px', marginLeft: '15px'}} href="#"><i className="fas fa-edit fa-lg"></i></a>
                                            <a href="#"><i className="far fa-trash-alt fa-lg"></i></a>
                                        </div>
                                    </li>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            )
        }
    }
}