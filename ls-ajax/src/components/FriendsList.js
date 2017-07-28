import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFriends } from '../actions';
import axios from 'axios';

class FriendsList extends Component {
    constructor() {
        super();

        this.state = {
            input: ''
        };
    }

    componentDidMount() {
        this.props.getFriends();
    }

    handleInputChange = (event) => {
        this.setState({
            input: event.target.value
        });
    };

    submitNewFriend = () => {
        const newFriend = {
            name: this.state.input,
            age: 55,
            email: 'adsf@asdf.com'
        };

        const promise = axios.post('http://localhost:5000/new-friend', newFriend)
            .then((response) => {
                this.props.getFriends();
                this.setState({
                    input: ''
                });
            });
    };

    render() {
        return (
            <div>
                <input value={this.state.input} onChange={this.handleInputChange} />
                <button onClick={this.submitNewFriend}>Submit</button>
                <ul>
                    {this.props.friends.map((friend, i) => {
                        return (
                            <li key={i}>
                                <p>`Friend ${i+1}`</p>
                                <p>`Name: ${friend.name}`</p>
                                <p>`Age: ${friend.age}`</p>
                                <p>`Email: ${friend.email}`</p>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        friends: state.friends
    };
};

export default connect(mapStateToProps, { getFriends })(FriendsList);