import { configureStore} from "@reduxjs/toolkit";

// import { filterReduser } from "./adverts/filterSlice"

import {receiversReduser } from "./receivers/receiversSlice"
import { rootReducer } from "./root/slice";
import { persistStore, persistReducer, FLUSH, REHYDRATE,
  PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const receiversPersistConfig = {
  key: 'receivers',
  storage,
  // whitelist: ['token']
}

export const store = configureStore({
  reducer: {
    root: rootReducer,
    receivers: persistReducer(receiversPersistConfig, receiversReduser),
    // filterFavorites: filterFavoritesReduser,
    // adverts: advertsReduser,
    // filter: filterReduser
  },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export  const persistor = persistStore(store)
