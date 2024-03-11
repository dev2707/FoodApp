

import thunk from 'redux-thunk';
import {persistStore} from 'redux-persist';
import rootReducer from './rootReducer';
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: rootReducer,
});

export const persistor = persistStore(store);


