import React, { Component } from 'react';

export default class ToDoList extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { userToDos } = this.props;

        return (
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
        );
    }
}