import React, { Component } from 'react';
import { Input } from 'react-materialize';

export default class ToDoEdit extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        const { userToDos } = this.props;

        if(ToDos.editEnabled == true) {
            return (
                <div>
                    {userToDos.map(ToDos =>
                        <li style={{marginBottom: '0'}} key={ToDos.id} className={ToDos.priority}>
                            <label htmlFor="">Description</label>
                            <textarea defaultValue={ToDos.description} className="white browser-default"></textarea>
                            <div className="row">
                                <div style={{marginTop: '10px'}} className="m6 s6">
                                    <label htmlFor="">Due Date</label>
                                    <input type="date" defaultValue={ToDos.dueDate}/>
                                </div>
                                <div style={{marginTop: '10px'}} className="m6 s6">
                                    <label htmlFor="">Priority</label>
                                    <Input s={12} type='select' defaultValue={ToDos.priority}>
                                        <option value="" disabled selected>Select Priority Level</option>
                                        <option value="card-content green lighten-4">Low</option>
                                        <option value="card-content yellow lighten-4">Medium</option>
                                        <option value="card-content red lighten-4">High</option>
                                    </Input>                           
                                </div>
                            </div>
                            <div>
                                <button style={{marginTop: '10px'}} className="btn">Save</button>
                            </div>
                        </li>
                    )}
                </div>
            )
        } else {
            return null;
        }

        
    }
}