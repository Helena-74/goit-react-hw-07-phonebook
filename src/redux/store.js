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

// import { combineReducers, configureStore } from '@reduxjs/toolkit';
// import { persistedReducer as contactsReducer } from './contactsSlice'; 
// import { filterReducer } from './filterSlice';
// import persistStore from 'redux-persist/es/persistStore';
// import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
// import persistReducer from 'redux-persist/es/persistReducer';
// import storage from 'redux-persist/es/storage';

// const reducer = combineReducers({
//   reducer: {
//     contacts: contactsReducer, 
//     filter: filterReducer,
//   }
// });

// const persistConfig = {
//   key: 'root',
//   storage,
// };

// const persistedReducer = persistReducer(persistConfig, reducer);

// export const store = configureStore({
//   reducer: persistedReducer,
//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });

// export const persistor = persistStore(store);



