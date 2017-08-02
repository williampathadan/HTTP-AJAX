import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getFriends } from '../actions';

class FriendsList extends Component {
    constructor() {
        super();
    }

    componentDidMount() {
        this.props.getFriends();
    }

    render() {
        return (
            <ul>
                {this.props.friends.map((friend, i) => {
                    return (
                        <li key={i}>
                            <p>{`Friend ${i+1}`}</p>
                            <p>{`Name: ${friend.name}`}</p>
                            <p>{`Age: ${friend.age}`}</p>
                            <p>{`Email: ${friend.email}`}</p>
                        </li>
                    );
                })}
            </ul>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        friends: state.friends
    };
};

const mapDispatchToProps = (dispatch) => {
   return bindActionCreators({ getFriends }, dispatch); 
};

export default connect(mapStateToProps, mapDispatchToProps)(FriendsList);