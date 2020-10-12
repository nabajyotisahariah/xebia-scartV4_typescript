import {createStore, combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import reduxThunk, { ThunkMiddleware }  from 'redux-thunk';
import {userReducer}    from './user/userReducer';
import {productReducer}    from './product/productReducer';
import { AppActions } from '../model/actions';

const rootReducer = combineReducers({
             user : userReducer,
             products : productReducer
            });
//const store = createStore ( rootReducer, applyMiddleware(logger, reduxThunk) );

//export default store;

export type AppState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer,
                         applyMiddleware(reduxThunk as ThunkMiddleware<AppState, AppActions>, logger)
                    );

export default store;
