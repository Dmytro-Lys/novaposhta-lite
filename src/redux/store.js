import { configureStore} from "@reduxjs/toolkit";
import { novaposhtaApi } from "API/novaposhtaApi";
// import { filterReduser } from "./adverts/filterSlice"

import { receiversReducer } from "./receivers/receiversSlice"
import { filterReducer } from "./receivers/filterSlice";
import { rootReducer } from "./root/slice";
import { queryReducer } from "./query/querySlice";
import { modalsReducer } from "./modals/modalsSlice";
import { dialogsReducer } from "./dialogs/dialogsSlice";
import { receiverFormReducer } from "./receiverForm/receiverFormSlice";
import { documentsReducer } from "./documents/documentsSlice";
import { persistStore, persistReducer, FLUSH, REHYDRATE,
  PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { trackingReducer } from "./tracking/trackingSlice";

const receiversPersistConfig = {
  key: 'receivers',
  storage,
  whitelist: ['items', 'selectItem']
}

export const store = configureStore({
  reducer: {
    root: rootReducer,
    receivers: persistReducer(receiversPersistConfig, receiversReducer),
    [novaposhtaApi.reducerPath]: novaposhtaApi.reducer,
    query: queryReducer,
    modals: modalsReducer,
    dialogs: dialogsReducer,
    receiverForm: receiverFormReducer,
    documents: documentsReducer,
    // filterFavorites: filterFavoritesReduser,
    // adverts: advertsReduser,
    filter: filterReducer,
    tracking: trackingReducer
  },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(novaposhtaApi.middleware),
})

export  const persistor = persistStore(store)
