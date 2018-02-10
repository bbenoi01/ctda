import React, { Component } from 'react';
import { Input } from 'react-materialize';
import {
    createDescText,
    createDueDate,
    createPriority,
    createNewToDo
} from '../actions/addToDoAction';

export default class AddToDo extends Component {
    constructor(props) {
        super(props);

        this.createDescText = this.createDescText.bind(this);
        this.createDueDate = this.createDueDate.bind(this);
        this.createPriority = this.createPriority.bind(this);
        this.createNewToDo = this.createNewToDo.bind(this);
    }

    createDescText(e) {
        const { dispatch } = this.props;
        const { value } = e.target;
        dispatch(createDescText(value));
    }

    createDueDate(e) {
        const { dispatch } = this.props;
        const { value } = e.target;
        dispatch(createDueDate(value));
    }

    createPriority(e) {
        const { dispatch } = this.props;
        const { value } = e.target;
        dispatch(createPriority(value));
    }

    createNewToDo(e) {
        e.preventDefault();
        const { dispatch, description, dueDate, priority  } = this.props;
        dispatch(createNewToDo(description, dueDate, priority));
        document.getElementById('addForm').reset();
    }


    render() {
        return (
            <div className="col l5 s12">
                <div className="card blue-grey darken-1">
                    <div className="card-content">
                        <span className="card-title center"><b>Add New ToDo</b></span>
                        <hr/>
                        <form id='addForm' onSubmit={this.createNewToDo}>
                            <div className="card-content">
                                <b>I want to...</b>
                                <textarea className="white browser-default" onChange={this.createDescText}></textarea>
                                <br/>
                                <b>Due Date</b>
                                <input type="date" onChange={this.createDueDate}/>
                                <br/>
                                <b>How much of a priority is this?</b>
                                <div className="row">
                                    <Input s={12} type='select'onChange={this.createPriority}>
                                        <option value="" disabled selected>Select Priority Level</option>
                                        <option value="card-content green lighten-4">Low</option>
                                        <option value="card-content yellow lighten-4">Medium</option>
                                        <option value="card-content red lighten-4">High</option>
                                    </Input>
                                </div>
                            </div>
                            <div className="card-action center">
                                <button type='submit' className='amber accent-4 white-text btn'>Add</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}