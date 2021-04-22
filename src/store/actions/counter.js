import * as ActionTypes from './actionsTypes';

export const increment = () => {
    return {
        type: ActionTypes.INCREMENT
    };
}

export const decrement = () => {
    return {
        type: ActionTypes.DECREMENT
    };
}

export const add = (valueParam) => {
    return {
        type: ActionTypes.ADD,
        value: valueParam
    };
}

export const substract = (valueParam) => {
    return {
        type: ActionTypes.SUBSTRACT,
        value: valueParam
    };
}
