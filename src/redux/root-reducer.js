import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import commonReducer from './common/common.reducer';
import homeReducer from './home/home.reducer';
import searchReducer from './search/search.reducer';
import classesReducer from './classes/classes.reducer';
import memberReducer from './member/member.reducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist : []
}

const rootReducer = combineReducers({
    commonParams : commonReducer,
    home : homeReducer,
    search : searchReducer,
    classes : classesReducer , 
    member : memberReducer
});

export default persistReducer(persistConfig, rootReducer);