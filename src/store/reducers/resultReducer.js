import * as ActionTypes from '../actions/actionsTypes';
import { updateObject } from './../utils';
const initialState = {
    result: []
};

const reducer = (state = initialState, action) => {

    switch(action.type) {
        case ActionTypes.STORE_RESULT:
            //override result with copy of state.counter, concat returns copy
            return updateObject(state, {result: state.result.concat({id: new Date(), value: action.result * 2})});
            
        case ActionTypes.REMOVE_RESULT:
            const newArray = state.result.filter(obj => obj.id !== action.identifier);
            return updateObject(state, {result: newArray});
    }

    return state;
};

export default reducer;
