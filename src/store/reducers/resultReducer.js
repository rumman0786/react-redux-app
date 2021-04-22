import * as ActionTypes from '../actions/actions';

const initialState = {
    result: []
};

const reducer = (state = initialState, action) => {

    switch(action.type) {
        case ActionTypes.STORE_RESULT:
            return {
                ...state, //copy/spread original state
                result: state.result.concat({id: new Date(), value: action.result}) //override result with copy of state.counter, concat returns copy
            }
        case ActionTypes.REMOVE_RESULT:
            const newArray = state.result.filter(obj => obj.id !== action.identifier);
            
            return {
                ...state,
                result: newArray
            }
    }

    return state;
};

export default reducer;
