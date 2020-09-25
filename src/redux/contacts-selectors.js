import { createSelector } from '@reduxjs/toolkit';

const getItems = state => state.contacts.items;
const loading = state => state.contacts.loading;
const getFilter = state => state.contacts.filter;

const getExistingContacts = createSelector(
  [getFilter, getItems],
  (filter, items) => {
    const existingContacts = items.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
    return existingContacts;
  },
);

const getContactById = (state, contactId) => {
  const items = getItems(state);

  return items.find(item => item.id === contactId);
};

export default {
  getFilter,
  getItems,
  getExistingContacts,
  loading,
  getContactById,
};
