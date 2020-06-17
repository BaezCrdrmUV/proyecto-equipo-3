import {createStore, combineReducers} from 'redux';
import playlists from './reducers/playlists'
import elementToRender from './reducers/elementToRender';

const reducer = combineReducers({
    playlists,
    elementToRender,
});

const store = createStore(reducer);

export default store;