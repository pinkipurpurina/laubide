import { handleActions } from 'redux-actions';
import { getPlatosSuccess } from '../actions';

export default handleActions({
    [getPlatosSuccess]: (state, action) => {
        return action.payload;
    },
}, []);
