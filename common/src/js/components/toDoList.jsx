import React, { Component } from 'react';
import {
    removeItem,
    enableEdit,
    editToggle
} from '../actions/toDoListAction';
import ToDoItem from '../indexes/toDoItem';

export default class ToDoList extends Component {
    constructor(props) {
        super(props);

        this.removeItem = this.removeItem.bind(this);
        this.toggleEdit = this.toggleEdit.bind(this);
    }

    removeItem(e) {
        const { dispatch } = this.props;
        const { id } = e.target;
        console.log(45, id);
        dispatch(removeItem(id))
    }

    toggleEdit(e) {
        const { dispatch } = this.props;
        const { id, contentEditable } = e.target;
        dispatch(enableEdit(id, contentEditable));
    }

    render() {
        const { toDos } = this.props;

        return (
            <ul style={{listStyleType: 'none', listStylePosition: 'inside', margin: '0', padding: '0'}}>
                {toDos.map((toDo, id) =>
                    <ToDoItem
                        key={toDo.id}
                        priority={toDo.priority}
                        description={toDo.description}
                        dueDate={toDo.dueDate}
                        id={toDo.id} 
                        editEnabled={toDo.editEnabled}
                        removeItem={this.removeItem}
                        toggleEdit={this.toggleEdit}
                        />
                )}
            </ul>
            
            
        )
    }
}