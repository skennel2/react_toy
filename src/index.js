import React from 'react';
import ReactDOM from 'react-dom';
import App from './container/App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware} from 'redux';
import * as serviceWorker from './serviceWorker';
import reducers from './reducers/index';
import loggerMiddleware from './lib/loggerMiddleware'
import ReduxThunk from 'redux-thunk';

const store = createStore(reducers, applyMiddleware(loggerMiddleware, ReduxThunk));

const app = 
(    
    <Provider store={store}> 
        <App /> 
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));

serviceWorker.unregister();
