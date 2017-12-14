import axios from 'axios';


export const ADD_FRIEND = 'ADD_FRIEND';
export const GET_FRIENDS = 'GET_FRIENDS';
export const UPDATE_FRIEND = 'UPDATE_FRIEND';
export const DELETE_FRIEND = 'DELETE_FRIEND';

export const getFriends = () => {

  const apiEndpoint = "http://localhost:5000/friends";  
  const promise = axios.get(apiEndpoint);

  return {
    type: GET_FRIENDS,
    payload: promise
  }

};

export const addFriend = (friend) => {

  const apiEndpoint = "http://localhost:5000/new-friend";  
  const promise = axios.post(apiEndpoint, friend);

  return {
    type: ADD_FRIEND,
    payload: promise
  }

};

export const updateFriend = (friendData, index) => {

  const apiEndpoint = "http://localhost:5000/update-friend";
  const promise = axios.put(apiEndpoint, {
    index,
    update: friendData
  });

  return {
    type: UPDATE_FRIEND,
    payload: promise
  }

};

export const deleteFriend = (index) => {

  const apiEndpoint = "http://localhost:5000/delete-friend";  
  const promise = axios.delete(apiEndpoint, {
    data: {
      index
    }
  });

  console.log(index);

  return {
    type: DELETE_FRIEND,
    payload: promise
  }

};
