const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
    counter : 0
};

// reducer
const rootReducer = (state=initialState, action) => {
    if(action.type == 'ADD_ACTION') {
        return {
            ...state,
            counter: state.counter + 1
        };
    }

    if(action.type == 'INC_ACTION') {
        return {
            ...state,
            counter: state.counter + action.value
        };
    }
    
    return state;
}

// store
const store = createStore(rootReducer); 
console.log(store.getState());

store.subscribe(() => {
    console.log('[subscribe]' , store.getState());
});

// // dispatch action
store.dispatch({type: 'ADD_ACTION'});
console.log(store.getState());
store.dispatch({type: 'INC_ACTION', value: 10});
console.log(store.getState());


