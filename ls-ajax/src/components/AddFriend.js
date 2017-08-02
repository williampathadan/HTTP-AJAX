import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addFriend } from '../actions';

class AddFriend extends Component {
    constructor() {
        super();

        this.state = {
            name: '',
            age: '',
            email: ''
        };
    }

    handleNameChange = (e) => {
        this.setState({
            name: e.target.value
        });
    };

    handleAgeChange = (e) => {
        this.setState({
            age: e.target.value
        });
    };

    handleEmailChange = (e) => {
        this.setState({
            email: e.target.value
        });
    };

    submitNewFriend = (e) => {
        e.preventDefault();
        const newFriend = {
            name: this.state.name,
            age: this.state.age,
            email: this.state.email
        };

        this.props.dispatch(addFriend(newFriend));
        this.setState({
            name: '',
            age: '',
            email: ''
        });
    };

    render() {
        return (
            <div>
                <input value={this.state.name} onChange={this.handleNameChange} placeholder="Name" />
                <input value={this.state.age} onChange={this.handleAgeChange} placeholder="Age" />
                <input value={this.state.email} onChange={this.handleEmailChange} placeholder="Email" />
                <button onClick={this.submitNewFriend}>Submit</button>
            </div>
        );
    }
}

export default connect()(AddFriend);