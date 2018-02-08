import React, { Component } from 'react';
import Navbar from './indexes/navbarIndex';
import AddTodo from './indexes/addTodoIndex';

export default class App extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className="container valign-wrapper" id='full-page'>
                    <div className="row">
                        <AddTodo />
                    </div>
                </div>
            </div>
        );
    }
}