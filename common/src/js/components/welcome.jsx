import React, { Component } from 'react';

export default class Welcome extends Component {
    render() {
        return (
            <div className="card-content blue lighten-3" style={{marginBottom: '0'}}>
                <h5>
                    <strong>Welcome to Simple ToDo App!</strong>
                </h5>
                <h6>
                    Get started now by adding a new ToDo.
                </h6>
            </div>
        );
    }
}