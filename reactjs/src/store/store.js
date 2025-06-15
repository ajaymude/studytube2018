import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from './auth/authSlice';
import { apiSlice } from './apiSlice';

// 1️⃣ Persist only the auth slice
const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['userInfo'], // persist only userInfo within auth
};

const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);

// 2️⃣ Combine reducers (only auth is persisted)
const rootReducer = combineReducers({
  [apiSlice.reducerPath]: apiSlice.reducer,
  auth: persistedAuthReducer,
});

// 3️⃣ Configure the store with middleware tweaks
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore redux-persist action types
        ignoredActions: [
          FLUSH,
          REHYDRATE,
          PAUSE,
          PERSIST,
          PURGE,
          REGISTER,
        ],
      },
    }).concat(apiSlice.middleware),
  devTools: true,
});

// 4️⃣ Create the persistor
export const persistor = persistStore(store);
