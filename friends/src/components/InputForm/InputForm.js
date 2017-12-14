import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addFriend, updateFriend } from '../../actions';

class InputForm extends Component {

  submitForm = (event) => {

    event.preventDefault();

    const form = event.target;

    const formData = {
      name: form.fullname.value.trim(),
      age: form.age.value.trim(),
      email: form.emailaddress.value.trim(),
    };


    const getIndexOfFriend = (friendsList, friendData) => {
      
      let exists = false;
    
      for (let i = 0; i < friendsList.length; i++) {
    
        const friend = friendsList[i];
    
        if (friend.name === friendData.name) {
    
          return i;
    
        }
    
      }
    
      return exists;
    
    };
    

    if(getIndexOfFriend(this.props.friends, formData) === false) {
      
      this.props.addFriend(formData);

    } else {

      const index = getIndexOfFriend(this.props.friends, formData);

      this.props.updateFriend(formData, index);

    }

  }

  render() {
    return (
      <form onSubmit={ this.submitForm } >
        <input type="text" placeholder="" name="fullname" />
        <input type="number" placeholder="" name="age" />
        <input type="email" placeholder="" name="emailaddress" />
        <input type="submit" />
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