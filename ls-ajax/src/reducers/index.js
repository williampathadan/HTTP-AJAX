import { combineReducers } from 'redux';
import { GET_FRIENDS, ADD_FRIEND } from '../actions';

const friendsReducer = (friends = [], action) => {
    switch(action.type) {
        case ADD_FRIEND:
            return [
                ...friends,
                {
                    name: action.payload.name,
                    age: action.payload.age,
                    email: action.payload.email
                }
            ];
        case GET_FRIENDS:
            return action.payload.data;
        default:
            return friends;
    }
};

const rootReducer = combineReducers({
    friends: friendsReducer
});

export default rootReducer;