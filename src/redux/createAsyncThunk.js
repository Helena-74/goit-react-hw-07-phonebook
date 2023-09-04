import { createAsyncThunk } from '@reduxjs/toolkit';
import { API_BASE_URL } from 'redux/selectors';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async () => {
  const response = await fetch(`${API_BASE_URL}/contacts`);
  const data = await response.json();
  return data;
});

export const addContact = createAsyncThunk('contacts/addContact', async (contactData) => {
  const response = await fetch(`${API_BASE_URL}/contacts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(contactData),
  });
  const data = await response.json();
  return data;
});

export const deleteContact = createAsyncThunk('contacts/deleteContact', async (contactId) => {
  const response = await fetch(`${API_BASE_URL}/contacts/${contactId}`, {
    method: 'DELETE',
  });
  if (response.status === 204) {
    return contactId;
  } else {
    throw new Error('Failed to delete contact');
  }
});