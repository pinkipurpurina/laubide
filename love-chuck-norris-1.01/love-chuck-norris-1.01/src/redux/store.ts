import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// import categorias from './reducers/categorias';
// import categoria from './reducers/categoria';
import section from './reducers/section';
import platos from './reducers/platos';
const reducer = combineReducers({
    // categorias,
    // categoria,
    section,
    platos
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
