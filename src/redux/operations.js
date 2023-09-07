import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { API_BASE_URL } from 'redux/selectors';

axios.defaults.baseURL = API_BASE_URL;

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContacts = createAsyncThunk(
  'contacts/addContact',
  async (name, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', { name });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContacts = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
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