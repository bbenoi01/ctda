import React, { Component } from 'react';
import {
    userToDos,
    removeItem,
    enableEdit,
    editToggle
} from '../actions/viewToDosAction';
import Welcome from '../indexes/welcomeIndex';
import ToDoEdit from '../indexes/toDoEditIndex';


export default class ToDoList extends Component {
    constructor(props) {
        super(props);


        this.removeItem = this.removeItem.bind(this);
        this.enableEdit = this.enableEdit.bind(this);
    }

    componentWillMount() {
        const { dispatch } = this.props;
        dispatch(userToDos());
    }

    removeItem(e) {
        const { dispatch } = this.props;
        const { id } = e.target;
        console.log(45, id);
        dispatch(removeItem(id))
    }

    enableEdit(e) {
        const { dispatch } = this.props;
        const { id, contentEditable } = e.target;
        dispatch(enableEdit(id, contentEditable));
        dispatch(editToggle(contentEditable));
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
                                <ToDoEdit />
                                {userToDos.map(ToDo =>
                                    <div key={ToDo.id}>
                                        <li style={{marginBottom: '0'}} className={ToDo.priority}>
                                            <p>
                                                <input type="checkbox" />
                                                <label htmlFor="" className='black-text'>{' ' + ToDo.description}</label>
                                            </p>
                                            <div className="right" style={{display: 'inline'}}>
                                                Due: {ToDo.dueDate}
                                                <a style={{marginRight: '7px', marginLeft: '15px'}} href="#" onClick={this.enableEdit}><i className="fas fa-edit fa-lg" contentEditable={ToDo.editEnabled} id={ToDo.id}></i></a>
                                                <a href="#" onClick={this.removeItem}><i className="far fa-trash-alt fa-lg" id={ToDo.id}></i></a>
                                            </div>
                                        </li>
                                    </div>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            )
        }
    }
}