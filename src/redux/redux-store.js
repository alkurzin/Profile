import { applyMiddleware, combineReducers, legacy_createStore as createStore} from 'redux'
import thunk from 'redux-thunk';
import ylPageReducer from './ylPage-reducer';
import bankDetailsPageReducer from './bankDetailsPage-reducer';


let reducers = combineReducers({
    ylPage: ylPageReducer,
    bankDetailsPage: bankDetailsPageReducer
});

let store = createStore(reducers, applyMiddleware(thunk));

export default store;