import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContacts, deleteContacts } from './operations';

  const handlePending = state => {
    state.isLoading = true;
  };
  const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  };

  const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
      items: [],
      isLoading: false,
      error: null,
    },
  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [addContacts.pending]: handlePending,
    [deleteContacts.pending]: handlePending,
    [fetchContacts.rejected]: handleRejected,
    [addContacts.rejected]: handleRejected,
    [deleteContacts.rejected]: handleRejected,
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [addContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [deleteContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(contacts => contacts.id === action.payload);
      state.items.splice(index, 1);
    },
  },
});

export const { fetchingInProgress, fetchingSuccess, fetchingError } =
contactsSlice.actions;

// export default contactsSlice.reducer;

export const persistedContactsSlice = contactsSlice.reducer;


  // reducers: {
  //   fetchingInProgress(state) {
  //     state.isLoading = true;
  //   },
  //   fetchingSuccess(state, action) {
  //     state.isLoading = false;
  //     state.error = null;
  //     state.items = action.payload;
  //   },
  //   fetchingError(state, action) {
  //     state.isLoading = false;
  //     state.error = action.payload;
  //   },
  // },


  // reducers: {
  //   deleteContact: (state, action) => {
  //     state.items = state.items.filter(
  //       (contact) => contact.id !== action.payload
  //     );
  //   },
  //   addContact: (state, action) => {
  //     state.items = [...state.items, action.payload];
  //   },
  // },
// });

// export const { deleteContact, addContact } = contactsSlice.actions;


// import { createSlice } from '@reduxjs/toolkit';

// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: {
//     items: [],
//     isLoading: false,
//     error: null,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchContacts.pending, (state) => {
//         state.isLoading = true;
//         state.error = null;
//       })
//       .addCase(fetchContacts.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.items = action.payload;
//       })
//       .addCase(fetchContacts.rejected, (state, action) => {
//         state.isLoading = false;
//         state.error = action.error.message;
//       })
//       .addCase(addContact.fulfilled, (state, action) => {
//         state.items.push(action.payload);
//       })
//       .addCase(deleteContact.fulfilled, (state, action) => {
//         state.items = state.items.filter((contact) => contact.id !== action.payload);
//       });
//   },
// });

// export default contactsSlice.reducer;


// import { configureStore, createSlice } from '@reduxjs/toolkit';
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// const contactsInitialState = {
//   items: [
//     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//   ],
// };

// export const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: contactsInitialState,
//   reducers: {
//     deleteContact: (state, action) => {
//       state.items = state.items.filter(
//         contact => contact.id !== action.payload
//       );
//     },
//     addContact: (state, action) => {
//       state.items = [...state.items, action.payload]
//     },
//   }, 
// });

// const persistConfig = {
//   key: 'root',
//   storage,
// };

// const persistedContactsSlice = persistReducer(persistConfig, contactsSlice.reducer);

// export const { deleteContact, addContact } = contactsSlice.actions;

// export const contactsReducer = contactsSlice.reducer;

// export const store = configureStore({
//   reducer: {
//     contacts: persistedContactsSlice,
//   },
// });

// export const persistedReducer = persistReducer(persistConfig, contactsReducer);