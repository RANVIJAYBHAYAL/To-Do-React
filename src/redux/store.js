import {createStore,applyMiddleware} from 'redux' ;
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger'
import rootReducer from "./reducers/index"
import { todos } from './middleware/rootSaga';

const sagaMiddleware=createSagaMiddleware();

const middlewares=[logger,sagaMiddleware];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(todos);

export default store;