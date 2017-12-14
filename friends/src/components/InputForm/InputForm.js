import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addFriend, updateFriend } from '../../actions';

import './InputForm.css';

class InputForm extends Component {

  constructor() {
    super();

    this.state = {
      friend: {
        name: "",
        email: "",
        age: "",
      }
    };
  }

  submitForm = (event) => {

    event.preventDefault();

    const form = event.target;

    const formData = this.state.friend;

    const getIndexOfFriend = (friendsList, friendData) => {
      let exists = false;
      for (let i = 0; i < friendsList.length; i++) {    
        const friend = friendsList[i];    
        if (friend.name === friendData.name) return i;    
      }    
      return exists;    
    };    

    if(getIndexOfFriend(this.props.friends, formData) === false) {
      
      if (formData.name !== "")
        this.props.addFriend(formData);

    } else {

      const index = getIndexOfFriend(this.props.friends, formData);
      this.props.updateFriend(formData, index);

    }

    this.setState({
      friend: {
        name: "",
        email: "",
        age: "",
      }
    });

  }

  handleInput = (event) => {

    const input = event.target;
    const name = input.name;
    const value = input.value.trim();

    let newState = this.state;
    newState.friend[name] = value;

    this.setState(newState);

  }

  render() {
    return (
      <form onSubmit={ this.submitForm } >
        <div className="inputs">
          <input type="text" placeholder="Name" name="name" value={ this.state.friend.name } onChange={ this.handleInput } />
          <input type="email" placeholder="Email" name="email" value={ this.state.friend.email } onChange={ this.handleInput } />
          <input type="number" placeholder="Age" name="age" value={ this.state.friend.age } onChange={ this.handleInput } />
        </div>
        <input type="submit" value="Add / Update Friend" />
      </form>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    friends: state
  }  
};

export default connect(mapStateToProps, { addFriend, updateFriend })(InputForm);