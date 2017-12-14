import { GET_FRIENDS, ADD_FRIEND, UPDATE_FRIEND, DELETE_FRIEND } from '../actions';

const reducer = (friends = [], action) => {

  switch(action.type) {

    case ADD_FRIEND:
      return action.payload.data;
    
    case GET_FRIENDS:
      return action.payload.data;
    
    case UPDATE_FRIEND:
      return action.payload.data;
    
    case DELETE_FRIEND:
      return action.payload.data;

    default:
      return friends;

  }
  
};

export default reducer;