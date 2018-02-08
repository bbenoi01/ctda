import React, { Component } from 'react';
import { Input } from 'react-materialize';

export default class AddTodo extends Component {
    render() {
        return (
            <div className="col-l4-s12">
                <div className="card blue-grey darken-1">
                    <div className="card-content">
                        <span className="card-title center"><b>Add New ToDo</b></span>
                        <hr/>
                        <form action="">
                            <div className="card-content">
                                <b>I want to...</b>
                                <textarea name="" id="" cols="30" rows="60" className=" white browser-default"></textarea>
                                <br/>
                                <b>Due Date</b>
                                <input type="date"/>
                                <br/>
                                <b>How much of a priority is this?</b>
                                <div className="row">
                                    <Input s={12} type='select'>
                                        <option value="1">Low</option>
                                        <option value="2">Medium</option>
                                        <option value="3">Hign</option>
                                    </Input>
                                </div>
                            </div>
                            <div className="card-action center">
                                <button className='amber accent-4 white-text btn'>Add</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}