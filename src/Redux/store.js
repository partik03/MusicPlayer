import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import reducer from './Reducer';

export const store = createStore(reducer, applyMiddleware(thunk));
// console.log("store",store.getState());
// store.dispatch(setAllSongs);