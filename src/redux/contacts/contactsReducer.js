// import { createReducer, combineReducers } from '@reduxjs/toolkit';

// import {
//   fetchContactsSuccess,
//   fetchContactsRequest,
//   fetchContactsError,
//   addFilter,
//   addContactRequest,
//   addContactSuccess,
//   addContactError,
//   deleteContactRequest,
//   deleteContactSuccess,
//   deleteContactError,
// } from './contactsActions';

// // ванильный редакс
// const items = createReducer([], {
//   [fetchContactsSuccess]: (_, { payload }) => payload,
//   [addContactSuccess]: (state, { payload }) => [...state, payload],
//   // [addContactSuccess]: (state, { payload }) => {
//   //   state.push({ name: payload.name, number: payload.number });
//   // },
//   [deleteContactSuccess]: (state, { payload }) =>
//     state.filter(contact => contact.id !== payload),
// });

// const isLoading = createReducer(false, {
//   [fetchContactsRequest]: () => true,
//   [fetchContactsSuccess]: () => false,
//   [fetchContactsError]: () => false,
//   [deleteContactRequest]: () => true,
//   [deleteContactSuccess]: () => false,
//   [deleteContactError]: () => false,
//   [addContactRequest]: () => true,
//   [addContactSuccess]: () => false,
//   [addContactError]: () => false,
// });

// const error = createReducer(null, {
//   [fetchContactsError]: (_, action) => action.payload,
//   [fetchContactsRequest]: () => null,
// });

// const filter = createReducer('', {
//   [addFilter]: (_, { payload }) => payload,
// });

// export default combineReducers({
//   items,
//   isLoading,
//   error,
//   filter,
// });

import { createReducer, combineReducers } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './contactsOperations';
import { addFilter } from './contactsActions';

// используем redux-thunk
const items = createReducer([], {
  [fetchContacts.fulfilled]: (_, { payload }) => payload,
  [addContact.fulfilled]: (state, { payload }) => {
    state.push(payload);
  },
  [deleteContact.fulfilled]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
});

const isLoading = createReducer(false, {
  [fetchContacts.pending]: () => true,
  [fetchContacts.fulfilled]: () => false,
  [fetchContacts.rejected]: () => false,
  [deleteContact.pending]: () => true,
  [deleteContact.fulfilled]: () => false,
  [deleteContact.rejected]: () => false,
  [addContact.pending]: () => true,
  [addContact.fulfilled]: () => false,
  [addContact.rejected]: () => false,
});

const error = createReducer(null, {
  [fetchContacts.rejected]: (_, action) => action.payload,
  [fetchContacts.pending]: () => null,
});

const filter = createReducer('', {
  [addFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  isLoading,
  error,
  filter,
});
