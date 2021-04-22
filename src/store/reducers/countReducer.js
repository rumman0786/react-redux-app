import * as ActionTypes from '../actions/actionsTypes';

const initialState = {
    counter: 0,
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
    }

    return state;
};

export default reducer;
