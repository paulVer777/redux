import {createStore, combineReducers} from 'redux'
import counterReducer,{inc,dec} from './state/counter'


const reducer = combineReducers({

    counter: counterReducer


});


export const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)


//ta metoda przyjmuje w srodku akcje, zaimportowane inc oraz dec, z wywołaniem
//dispatch wysyła i powiadamia store ze cos sie zmienilo,, wywoluje akcje

store.dispatch(inc());
store.dispatch(inc());
store.dispatch(inc());
store.dispatch(dec());