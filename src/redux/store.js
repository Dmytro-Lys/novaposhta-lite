import { configureStore} from "@reduxjs/toolkit";
import { novaposhtaApi } from "API/novaposhtaApi";
// import { filterReduser } from "./adverts/filterSlice"

import { receiversReduser } from "./receivers/receiversSlice"
import { filterReduser } from "./receivers/filterSlice";
import { rootReducer } from "./root/slice";
import { queryReducer } from "./query/querySlice";
import { modalsReducer } from "./modals/modalsSlice";
import { receiverFormReducer } from "./receiverForm/receiverFormSlice";
import { documentsReducer } from "./documents/documentsSlice";
import { persistStore, persistReducer, FLUSH, REHYDRATE,
  PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const receiversPersistConfig = {
  key: 'receivers',
  storage,
  whitelist: ['items', 'selectItem']
}

export const store = configureStore({
  reducer: {
    root: rootReducer,
    receivers: persistReducer(receiversPersistConfig, receiversReduser),
    [novaposhtaApi.reducerPath]: novaposhtaApi.reducer,
    query: queryReducer,
    modals: modalsReducer,
    receiverForm: receiverFormReducer,
    documents: documentsReducer,
    // filterFavorites: filterFavoritesReduser,
    // adverts: advertsReduser,
    filter: filterReduser
  },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(novaposhtaApi.middleware),
})

export  const persistor = persistStore(store)
