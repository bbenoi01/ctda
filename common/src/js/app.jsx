import React, { Component } from 'react';
import Navbar from './indexes/navbarIndex';
import AddToDo from './indexes/addToDoIndex';
import ViewToDos from './indexes/viewToDosIndex';


export default class App extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className="container">
                    <div className="row">
                        <div className="col s12">
                            <h4><b>Simple ToDo App</b></h4>
                            <h5><small>Keep track of your day</small></h5>
                            <hr/>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <AddToDo />
                        <ViewToDos />
                    </div>
                </div>
            </div>
        );
    }
}