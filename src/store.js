import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import todosReducer from "./reducers/todosReducer";
import storage from 'redux-persist/es/storage';
import {persistStore, persistReducer} from 'redux-persist'
import thunk from "redux-thunk";
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
    todosState: todosReducer,
    form: formReducer,
});

const persistConfig = {
    key: 'root',
    storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default (persistingEnabled) => {
    const store = createStore(
        persistingEnabled ? persistedReducer : rootReducer,
        compose(
            applyMiddleware(thunk),
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
    );
    if (!persistingEnabled) {
        return {store};
    }
    const persistor = persistStore(store);
    return {store, persistor};
};
