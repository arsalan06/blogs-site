import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import blogReducer from './slices/blogSlice';
// ==============================|| COMBINE REDUCER ||============================== //

const rootPersistConfig = {
  key: 'root',
  storage,
  keyPrefix: 'redux-',
  whitelist: []
};
const rootReducer = combineReducers({
  blogReducer
});

export { rootPersistConfig, rootReducer };
