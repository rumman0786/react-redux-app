import * as ActionTypes from './actionTypes';

const initialState = {
    counter: 0,
    result: []
};

const reducer = (state = initialState, action) => {

    switch(action.type) {

        case ActionTypes.INCREMENT:
            return {
                ...state,
                counter: state.counter + 1
            }
        case ActionTypes.DECREMENT:
            return {
                ...state,
                counter: state.counter - 1
            }
        case ActionTypes.SUBSTRACT:
            return {
                ...state,
                counter: state.counter - action.value
            }
        case ActionTypes.ADD:
            return {
                ...state,
                counter: state.counter + action.value
            }

        case ActionTypes.STORE_RESULT:
            return {
                ...state, //copy/spread original state
                result: state.result.concat({id: new Date(), value: state.counter}) //override result with copy of state.counter, concat returns copy
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