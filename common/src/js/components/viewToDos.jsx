import React, { Component } from 'react';
import ToDoList from '../indexes/toDoListIndex';

export default class ViewToDos extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        // const { userToDos } = this.props;

        return (
            <ToDoList />
        )
    }
}