import { configureStore, } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { persistReducer , persistStore} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthSlice from './slices/AuthSlice';
import logger from 'redux-logger'
import storage from "redux-persist/lib/storage";


const reducers = combineReducers({
  auth: AuthSlice,
});

const persistConfig = {
  version: 0, // Nueva versión 0, versión anterior -1
  key: 'root',
  storage: AsyncStorage,
  // blacklist: ['auth'], // Persiste todo excepto este slice
  // whitelist: ['auth'], // Solo persiste este slice
  // migrate: createMigrate(migrations, { debug: true })
  
};


const persistedReducer = persistReducer(persistConfig, reducers);


export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
