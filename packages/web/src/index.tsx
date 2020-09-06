import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App';
import * as serviceWorker from './serviceWorker';
import axios from 'axios';
import { baseUrl } from './api';
import { Provider } from 'react-redux';
import { store } from './state';

// Разкомментить, если хочется последить за изменениями стора.
// store.subscribe(() => console.log(store.getState()));

axios.defaults.baseURL = baseUrl;
axios.defaults.headers.common['Authorization'] = store.getState()?.token;

if (process.env.NODE_ENV === 'development') {
    (window as any).axios = axios;
}

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
