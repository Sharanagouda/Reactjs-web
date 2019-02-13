import { applyMiddleware, createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import promise from "redux-promise";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import reducers from "../reducers"
import logger from 'redux-logger'

const persistConfig = {
    key: "root",
    storage,
    whitelist: [],
    blacklist: []
}

const persistedReducer = persistReducer(persistConfig, reducers);

export default () => {

    let store = createStore(persistedReducer, {}, applyMiddleware(thunk, promise,logger));
    let persistor = persistStore(store);
    return { store, persistor };
}