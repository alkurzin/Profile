import { applyMiddleware, combineReducers, legacy_createStore as createStore} from 'redux'
import thunk from 'redux-thunk';
import ylPageReducer from './ylPage-reducer';
import bankDetailsPageReducer from './bankDetailsPage-reducer';
import ipPageReducer from './ipPage-reducer';


let reducers = combineReducers({
    ylPage: ylPageReducer,
    ipPage: ipPageReducer,
    bankDetailsPage: bankDetailsPageReducer
});

let store = createStore(reducers, applyMiddleware(thunk));

export default store;