import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getFriends } from '../../actions';

import Friend from '../Friend/Friend';
import './FriendsList.css';

class FriendsList extends Component {
  
  componentDidMount() {
    
    this.props.getFriends();

  }

  render() {

    return (
      <div className="FriendsList">
      {
        this.props.friends.map((friend, index) => (
          <Friend key={ index } friend={ friend } index={ index } />
        ))
      }
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    friends: state
  };
}

export default connect(mapStateToProps, { getFriends })(FriendsList);