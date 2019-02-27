import posts from '../data/posts';
import {combineReducers} from 'redux';

function commentReducer (state={}, action) {
    switch (action.type) {
        case 'ADD_COMMENT':
            if (!state[action.postId]) {
                console.log('the if');
                return {
                    ...state,
                    [action.postId] : [action.comment]
                };
            } else {
                console.log('else');
                return {
                    ...state,
                    [action.postId] : [...state[action.postId], action.comment]
                };
            }
            
        default:
            return state;    
    }
}

function postReducer (state = posts, action) {
    switch(action.type) {
        case 'REMOVE_POST':
        return [...state.slice(0, action.index), ...state.slice(action.index + 1)];
        case 'ADD_POST':
        return [...state, action.post];
        case 'LOAD_POSTS':
        console.log(action);
            return action.posts;
        default:
            return state;
    }
};

const rootReducer = combineReducers({postReducer, commentReducer});

export default rootReducer;
