import {createStore, combineReducers} from 'redux';
import playlists from './reducers/playlists'
import elementToRender from './reducers/elementToRender';
import songs from './reducers/songs'
import user from './reducers/user';

const reducer = combineReducers({
    playlists,
    elementToRender,
    songs,
    user
    
});

const store = createStore(reducer);

export default store;