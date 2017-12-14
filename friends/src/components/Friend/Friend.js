import React, { Component } from 'react';
import { connect } from 'react-redux';

import { deleteFriend } from '../../actions';

import './Friend.css';

class FriendItem extends Component {

  removeFriend = (event) => {
    
    this.props.deleteFriend(this.props.index);    

  }

  render() {
    return (
      <li className="Friend">
        <div className="Friend__prop Friend__name">{ this.props.friend.name }</div>
        <div className="Friend__prop Friend__email">{ this.props.friend.email }</div>
        <div className="Friend__prop Friend__age">{ this.props.friend.age }</div>
        <div className="deleteIcon" onClick={ (event) => { this.removeFriend(event) } }> X </div>
      </li>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    friends: state
  };
}

export default connect(mapStateToProps, { deleteFriend })(FriendItem);