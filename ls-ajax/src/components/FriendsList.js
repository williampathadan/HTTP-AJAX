import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getFriends } from '../actions';
import Friend from './Friend';

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
                        <Friend key={i} index={i} friend={friend} />
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