import { applyMiddleware, combineReducers, legacy_createStore as createStore} from 'redux'
import thunk from 'redux-thunk';
import ylPageReducer from './ylPage-reducer';
import bankDetailsReducer from './bankDetails-reducer';


let reducers = combineReducers({
    ylPage: ylPageReducer,
    bankDetailsPage: bankDetailsReducer
});

let store = createStore(reducers, applyMiddleware(thunk));

export default store;