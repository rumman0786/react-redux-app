import * as ActionTypes from './actionsTypes';

function store(valueParam) {
    return {
        type: ActionTypes.STORE_RESULT,
        result: valueParam
    }; 
}

export const storeAsync = (valueParam) => {
    return (dispatch, getState) => {
        setTimeout(() => {
            // console.log(getState().ctr.counter);
            dispatch(store(valueParam))
        } , 2000);
    }
}

export const remove = (valueParam) => {
    return {
        type: ActionTypes.REMOVE_RESULT,
        identifier: valueParam
    };
}
