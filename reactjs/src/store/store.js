import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer }   from 'redux-persist';
import storage                             from 'redux-persist/lib/storage'; // defaults to localStorage
import authReducer                        from './auth/authSlice';
import { apiSlice }                       from './apiSlice';

// 1️⃣ Combine your slices
const rootReducer = combineReducers({
  [apiSlice.reducerPath]: apiSlice.reducer,
  auth: authReducer,
});

// 2️⃣ Configure redux-persist
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'],   // only persist the auth slice
};

// 3️⃣ Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// 4️⃣ Configure the store with middleware tweaks
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // ignore these action types so redux-persist doesn’t trip over them
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }).concat(apiSlice.middleware),
  devTools: true,
});

// 5️⃣ Create the persistor
export const persistor = persistStore(store);
