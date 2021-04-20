import React from 'react';
import ReactDOM from 'react-dom';
import {combineReducers, createStore} from 'redux';
import {Provider} from 'react-redux';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import countReducer from './store/reducers/countReducer';
import resultReducer from './store/reducers/resultReducer';

const rootReducer = combineReducers({
    ctr: countReducer,
    rslt: resultReducer
});

const store = createStore(rootReducer);
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
