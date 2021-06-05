import 'react-app-polyfill/ie11';
import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/components/app/App';
import { HashRouter } from 'react-router-dom'
import { Provider as ReduxProvider } from 'react-redux';

import ScrollToTop from './config/ScrollToTop';
import { Store } from './store/Store';

ReactDOM.render(
    <ReduxProvider store={Store}>
        <HashRouter>
            <ScrollToTop>
                <App></App>
            </ScrollToTop>
        </HashRouter>
    </ReduxProvider>,
    document.getElementById('root')
);


// npm install --save moment react-moment
// npm install --save redux-thunk moment(data ou vazio).format('DD/MM/YYYY')