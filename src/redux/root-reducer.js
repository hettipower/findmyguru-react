import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import commonReducer from './common/common.reducer';
import homeReducer from './home/home.reducer';
import searchReducer from './search/search.reducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist : []
}

const rootReducer = combineReducers({
    commonParams : commonReducer,
    home : homeReducer,
    search : searchReducer
});

export default persistReducer(persistConfig, rootReducer);