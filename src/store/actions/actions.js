export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD = 'ADD';
export const SUBSTRACT = 'SUBSTRACT';
export const STORE_RESULT = 'STORE_RESULT';
export const REMOVE_RESULT = 'REMOVE_RESULT';

export const increment = () => {
    return {
        type: INCREMENT
    };
}

export const decrement = () => {
    return {
        type: DECREMENT
    };
}

export const add = (valueParam) => {
    return {
        type: ADD,
        value: valueParam
    };
}

export const substract = (valueParam) => {
    return {
        type: SUBSTRACT,
        value: valueParam
    };
}

function store(valueParam) {
    return {
        type: STORE_RESULT,
        result: valueParam
    }; 
}

export const storeAsync = (valueParam) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(store(valueParam))
        } , 2000);
    }
}

export const remove = (valueParam) => {
    return {
        type: REMOVE_RESULT,
        identifier: valueParam
    };
}
