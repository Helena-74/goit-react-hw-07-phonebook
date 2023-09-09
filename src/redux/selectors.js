import { createSelector } from "@reduxjs/toolkit";

export const getContacts = state => state.contacts.items;
export const getFilter = state => state.filter;
export const getIsLoading = state => state.contacts.isLoading;
export const getError = state => state.contacts.error;

// export const API_BASE_URL = 'https://64f635412b07270f705e4a34.mockapi.io';

export const selectVisibleContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);

export const selectFilter = (state) => state.filter;


// export const getStatusFilter = state => state.filters.status;
// export const selectVisibleContacts = (state) => {
//   const contacts = getContacts(state);
//   const filter = getFilter(state);
//   return contacts.filter((contact) =>
//     contact.name.toLowerCase().includes(filter.toLowerCase())
//   );
// };