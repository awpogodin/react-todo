import {createStore, combineReducers} from 'redux'
import todosReducer from "./reducers/todosReducer";
import storage from 'redux-persist/es/storage';
import {persistStore, persistReducer} from 'redux-persist'

const rootReducer = combineReducers({
    todosState: todosReducer,
});

const persistConfig = {
    key: 'root',
    storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
    const store = createStore(
        persistedReducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    const persistor = persistStore(store);
    return {store, persistor};
};
