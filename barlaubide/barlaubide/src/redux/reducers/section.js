import { handleActions } from 'redux-actions';
import {setSection, getSection } from '../actions';

export default handleActions({
    [setSection]: (state, action) => {
        return action.payload;
    },

    [getSection]: (state, action) => {
       return action.payload;
    },
}, 0);