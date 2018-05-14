import {createStore, combineReducers} from 'redux'
import counter,{inc,dec} from './state/counter'


//counter

const reducer = combineReducers({

    counter


});


export const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)


//ta metoda przyjmuje w srodku akcje, zaimportowane inc oraz dec, z wywołaniem
//dispatch wysyła i powiadamia store ze cos sie zmienilo,, wywoluje akcje

// store.dispatch(inc());
// store.dispatch(inc());
// store.dispatch(inc());
// store.dispatch(dec());


window.inc=(x)=>store.dispatch(inc(x));
window.inc=()=>store.dispatch(dec());