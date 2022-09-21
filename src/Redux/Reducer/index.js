import {combineReducers} from 'redux';
import { allSongsReducer } from './allSongsReducer';
import { activeSongReducer, activeSongStatusReducer } from './activesongreducer';
const reducer = combineReducers({
    allsongs: allSongsReducer,
    activesong: activeSongReducer,
    activesongstatus : activeSongStatusReducer,
})
export default reducer;