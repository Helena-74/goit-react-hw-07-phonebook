import { configureStore } from '@reduxjs/toolkit';
import { filterReducer } from './filterSlice';

import { persistedContactsSlice } from './contactsSlice';

export const store = configureStore({
  reducer: {
    contacts: persistedContactsSlice,
    filter: filterReducer,
  },

});

