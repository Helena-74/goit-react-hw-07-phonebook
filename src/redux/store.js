import { configureStore } from '@reduxjs/toolkit';
import { persistedReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';
import persistStore from 'redux-persist/es/persistStore';
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';

export const store = configureStore({
  reducer: {
    contacts: persistedReducer,
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



// import { configureStore, createSlice } from '@reduxjs/toolkit';
// import { persistReducer, persistStore } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// const filterSlice = createSlice({
//   name: 'filter',
//   initialState: '',
//   reducers: {
//     setFilter: (state, action) => action.payload,
//   },
// });

// export const { setFilter } = filterSlice.actions;

// const persistConfig = {
//   key: 'root',
//   storage,
// };

// const persistedContactsSlice = persistReducer(persistConfig, contactsReducer);

// export const store = configureStore({
//   reducer: {
//     contacts: persistedContactsSlice,
//     filter: filterSlice.reducer,
//   },
// });

// export const persistor = persistStore(store);




