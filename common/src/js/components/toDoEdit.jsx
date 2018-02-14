import React, { Component } from 'react';
import { Input } from 'react-materialize';
import {
    descEdit,
    dueDateEdit,
    priorityEdit,
    editToDo
} from '../actions/toDoEditAction';

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
        const { editEnabled, itemPriority, itemDescription, itemDueDate, itemId } = this.props;

        if(editEnabled) {
            return (
                <div>
                    <li style={{marginBottom: '0'}} className={itemPriority}>
                        <label htmlFor="">Description</label>
                        <textarea defaultValue={itemDescription} onChange={this.handleDescEdit} className="white browser-default"></textarea>
                        <div className="row">
                            <div style={{marginTop: '10px'}} className="m6 s6">
                                <label htmlFor="">Due Date</label>
                                <input type="date" defaultValue={itemDueDate} onChange={this.handleDueDateEdit}/>
                            </div>
                            <div style={{marginTop: '10px'}} className="m6 s6">
                                <label htmlFor="">Priority</label>
                                <Input s={12} type='select' defaultValue={itemPriority} onChange={this.handlePriorityEdit} >
                                    <option value="" disabled selected>Select Priority Level</option>
                                    <option value="card-content green lighten-4">Low</option>
                                    <option value="card-content yellow lighten-4">Medium</option>
                                    <option value="card-content red lighten-4">High</option>
                                </Input>                           
                            </div>
                            <div>
                                <button style={{marginTop: '10px'}} className='amber accent-4 white-text btn right' id={itemId} onClick={this.handleClick} >Save</button>
                            </div>
                        </div>
                    </li>
                </div>
            )
        } else {
            return null;
        }
    }
}