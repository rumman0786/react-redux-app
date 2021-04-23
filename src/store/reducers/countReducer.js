import * as ActionTypes from '../actions/actionsTypes';
import { updateObject } from './../utils';

const initialState = {
    counter: 0,
};

const reducer = (state = initialState, action) => {

    switch(action.type) {

        case ActionTypes.INCREMENT:
            return updateObject(state, {counter: state.counter + 1});

        case ActionTypes.DECREMENT:
            return updateObject(state, {counter: state.counter - 1});

        case ActionTypes.SUBSTRACT:
            return updateObject(state, {counter: state.counter - action.value});

        case ActionTypes.ADD:
            return updateObject(state, {counter: state.counter + action.value});
    }

    return state;
};

export default reducer;
