import {createStore, combineReducers} from 'redux';
import playlists from './reducers/playlists'
import elementToRender from './reducers/elementToRender';
import songs from './reducers/songs'

const reducer = combineReducers({
    playlists,
    elementToRender,
    songs
});

const store = createStore(reducer);

export default store;