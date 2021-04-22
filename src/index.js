import React from 'react';
import ReactDOM from 'react-dom';
import {combineReducers, createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import countReducer from './store/reducers/countReducer';
import resultReducer from './store/reducers/resultReducer';

const rootReducer = combineReducers({
    ctr: countReducer,
    rslt: resultReducer
});

const logger = store => {
    return next => {
        return action => {
            console.log('[Middleware Dispatching] ', action);
            const result = next(action);

            console.log('[Middleware Next State] ', store.getState());
            return result;
        }
    }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger, thunk)));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
