import React, { Component } from 'react';
import ToDoEdit from '../indexes/toDoEditIndex';

export default class ToDoItem extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        const {priority, description, dueDate, id, editEnabled, removeItem, toggleEdit} = this.props;
        
        return(
            <div>
                <ToDoEdit 
                    editEnabled={editEnabled}
                    itemPriority={priority}
                    itemDescription={description}
                    itemDueDate={dueDate}
                    itemId={id}
                    />
                <li style={{marginBottom: '0'}} className={priority}>
                    <p>
                        <input type="checkbox" />
                        <label htmlFor="" className='black-text'>{' ' + description}</label>
                    </p>
                    <div className="right" style={{display: 'inline'}}>
                        Due: {dueDate}
                        <a style={{marginRight: '7px', marginLeft: '15px'}} href="#" onClick={toggleEdit}><i className="fas fa-edit fa-lg" contentEditable={editEnabled} id={id}></i></a>
                        <a href="#" onClick={removeItem}><i className="far fa-trash-alt fa-lg" id={id}></i></a>
                    </div>
                </li>
            </div>
        )
    }
}