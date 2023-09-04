import { configureStore } from '@reduxjs/toolkit';
// import { persistedReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';
import persistStore from 'redux-persist/es/persistStore';
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import { persistedContactsSlice } from './contactsSlice';

export const store = configureStore({
  reducer: {
    contacts: persistedContactsSlice,
    filter: filterReducer,
  },
  middleware: getDefaultMiddleware =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),

});


export const persistor = persistStore(store);



