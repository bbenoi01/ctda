import React, { Component } from 'react';
import { Input } from 'react-materialize';
import {
    descEdit,
    dueDateEdit,
    priorityEdit,
    editToDo
} from '../actions/viewToDosAction';

export default class ToDoEdit extends Component {
    constructor(props) {
        super(props);

        this.handleDescEdit = this.handleDescEdit.bind(this);
        this.handleDueDateEdit = this.handleDueDateEdit.bind(this);
        this.handlePriorityEdit = this.handlePriorityEdit.bind(this);
        this.handleClick = this.handleClick.bind(this);

    }
    
    handleDescEdit(e) {
        const { dispatch } = this.props;
        const { value } = e.target;
        dispatch(descEdit(value))
    }

    handleDueDateEdit(e) {
        const { dispatch } = this.props;
        const { value } = e.target;
        dispatch(dueDateEdit(value))
    }

    handlePriorityEdit(e) {
        const { dispatch } = this.props;
        const { value } = e.target;
        dispatch(priorityEdit(value))
    }

    handleClick(e) {
        e.preventDefault();
        const { dispatch, description, dueDate, priority } = this.props;
        const { id } = e.target;
        dispatch(editToDo(description, dueDate, priority, id))
    }



    render() {
        const { userToDos } = this.props;

        return (
            <div>
                {!!userToDos && userToDos.filter(ToDo => ToDo.editEnabled === true).map(ToDo =>
                    <li style={{marginBottom: '0'}} key={ToDo.id} className={ToDo.priority}>
                        <label htmlFor="">Description</label>
                        <textarea defaultValue={ToDo.description} onChange={this.handleDescEdit} className="white browser-default"></textarea>
                        <div className="row">
                            <div style={{marginTop: '10px'}} className="m6 s6">
                                <label htmlFor="">Due Date</label>
                                <input type="date" defaultValue={ToDo.dueDate} onChange={this.handleDueDateEdit}/>
                            </div>
                            <div style={{marginTop: '10px'}} className="m6 s6">
                                <label htmlFor="">Priority</label>
                                <Input s={12} type='select' defaultValue={ToDo.priority} onChange={this.handlePriorityEdit} >
                                    <option value="" disabled selected>Select Priority Level</option>
                                    <option value="card-content green lighten-4">Low</option>
                                    <option value="card-content yellow lighten-4">Medium</option>
                                    <option value="card-content red lighten-4">High</option>
                                </Input>                           
                            </div>
                            <div>
                                <button style={{marginTop: '10px'}} className='amber accent-4 white-text btn right' contentEditable={ToDo.editEnabled} id={ToDo.id} onClick={this.handleClick} >Save</button>
                            </div>
                        </div>
                    </li>
                )}
            </div>
        )
    }
}