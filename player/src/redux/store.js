import {createStore, combineReducers} from 'redux';
import playlists from './reducers/playlists'
import elementToRender from './reducers/elementToRender';
import songs from './reducers/songs'
import user from './reducers/user';
import album from './reducers/albums'

const reducer = combineReducers({
    playlists,
    elementToRender,
    songs,
    user,
    album
    
});

const store = createStore(reducer);

export default store;