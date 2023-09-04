import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    deleteContact: (state, action) => {
      state.items = state.items.filter(
        (contact) => contact.id !== action.payload
      );
    },
    addContact: (state, action) => {
      state.items = [...state.items, action.payload];
    },
  },
});

export const { deleteContact, addContact } = contactsSlice.actions;

export default contactsSlice.reducer;

export const persistedContactsSlice = contactsSlice.reducer;


// import { createAsyncThunk } from '@reduxjs/toolkit';
// import { API_BASE_URL } from 'redux/selectors';

// export const fetchContacts = createAsyncThunk('contacts/fetchAll', async () => {
//   const response = await fetch(`${API_BASE_URL}/contacts`);
//   const data = await response.json();
//   return data;
// });

// export const addContact = createAsyncThunk('contacts/addContact', async (contactData) => {
//   const response = await fetch(`${API_BASE_URL}/contacts`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(contactData),
//   });
//   const data = await response.json();
//   return data;
// });

// export const deleteContact = createAsyncThunk('contacts/deleteContact', async (contactId) => {
//   const response = await fetch(`${API_BASE_URL}/contacts/${contactId}`, {
//     method: 'DELETE',
//   });
//   if (response.status === 204) {
//     return contactId;
//   } else {
//     throw new Error('Failed to delete contact');
//   }
// });




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