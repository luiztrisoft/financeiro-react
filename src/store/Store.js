import thunk from 'redux-thunk'
import {combineReducers, applyMiddleware, createStore} from 'redux';

import { ContaReducer } from './reducers/ContaReducer'
import { GlobalReducer } from './reducers/GlobalReducer';
import { DashboardReducer } from './reducers/DashboardReducer';

/**
* Todos os reducers devem ser adicionados.
*/
export const Reducers = combineReducers ({
    contaReducer: ContaReducer,
    globalReducer: GlobalReducer,
    dashboardReducer: DashboardReducer,
});

export const Store = createStore(Reducers, applyMiddleware(thunk));