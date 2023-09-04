export const getContacts = state => state.contacts.items;
export const getFilter = state => state.filter;

export const API_BASE_URL = 'https://64f635412b07270f705e4a34.mockapi.io';

export const selectVisibleContacts = (state) => {
  const contacts = getContacts(state);
  const filter = getFilter(state);
  return contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
};

export const selectFilter = (state) => state.filter;