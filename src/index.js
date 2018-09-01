import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';

// redux
import { createStore } from 'redux';
import appReducers from './reducers/index';
import { Provider } from 'react-redux';

const store = createStore(
	appReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
            <Provider store={ store }>
							<BrowserRouter>
                <App />
							</BrowserRouter>
            </Provider>
            , document.getElementById('root'));
registerServiceWorker();
