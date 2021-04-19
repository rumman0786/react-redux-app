
const initialState = {
    counter: 0,
    result: []
};

const reducer = (state = initialState, action) => {

    switch(action.type) {

        case 'INCREMENT':
            return {
                ...state,
                counter: state.counter + 1
            }
        case 'DECREMENT':
            return {
                ...state,
                counter: state.counter - 1
            }
        case 'SUBSTRACT':
            return {
                ...state,
                counter: state.counter - action.value
            }
        case 'ADD':
            return {
                ...state,
                counter: state.counter + action.value
            }

        case 'STORE_RESULT':
            return {
                ...state, //copy/spread original state
                result: state.result.concat({id: new Date(), value: state.counter}) //override result with copy of state.counter, concat returns copy
            }
        case 'REMOVE_RESULT':
            const newArray = state.result.filter(obj => obj.id !== action.identifier);
            
            return {
                ...state,
                result: newArray
            }
    }

    return state;
};

export default reducer;