import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthSlice from './slices/AuthSlice';

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
});
