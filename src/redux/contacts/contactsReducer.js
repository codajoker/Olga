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

// import { createReducer, combineReducers } from '@reduxjs/toolkit';
// import { fetchContacts, addContact, deleteContact } from './contactsOperations';
// import { addFilter } from './contactsActions';

// // используем redux-thunk
// const items = createReducer([], {
//   [fetchContacts.fulfilled]: (_, { payload }) => payload,
//   [addContact.fulfilled]: (state, { payload }) => {
//     state.push(payload);
//   },
//   [deleteContact.fulfilled]: (state, { payload }) =>
//     state.filter(contact => contact.id !== payload),
// });

// const isLoading = createReducer(false, {
//   [fetchContacts.pending]: () => true,
//   [fetchContacts.fulfilled]: () => false,
//   [fetchContacts.rejected]: () => false,
//   [deleteContact.pending]: () => true,
//   [deleteContact.fulfilled]: () => false,
//   [deleteContact.rejected]: () => false,
//   [addContact.pending]: () => true,
//   [addContact.fulfilled]: () => false,
//   [addContact.rejected]: () => false,
// });

// const error = createReducer(null, {
//   [fetchContacts.rejected]: (_, action) => action.payload,
//   [fetchContacts.pending]: () => null,
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

// use createSlice instead of createReducer

import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './contactsOperations';

// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: {
//     items: [],
//     isLoading: false,
//     error: null,
//     filter: '',
//   },
//   reducers: {
//     addFilter(state, action) {
//       state.filter = action.payload;
//     },
//   },
//   extraReducers: {
//     [fetchContacts.pending]: state => {
//       state.isLoading = true;
//       console.log(state.isLoading);
//     },
//     [fetchContacts.fulfilled]: (state, { payload }) => {
//       state.items = payload;
//       state.isLoading = false;
//       console.log(state.isLoading);
//     },
//     [fetchContacts.rejected]: (state, { payload }) => {
//       state.error = payload;
//       state.isLoading = false;
//     },

//     [addContact.pending]: state => {
//       state.isLoading = true;
//     },
//     [addContact.fulfilled]: (state, { payload }) => {
//       state.items.push(payload);
//       state.isLoading = false;
//     },
//     [addContact.rejected]: (state, { payload }) => {
//       state.error = payload;
//       state.isLoading = false;
//     },

//     [deleteContact.pending]: state => {
//       state.isLoading = true;
//       console.log('sdfefref', state.isLoading);
//     },
//     [deleteContact.fulfilled]: (state, { payload }) => {
//       state.items = state.items.filter(contact => contact.id !== payload);
//       state.isLoading = false;
//       console.log(state.isLoading);
//     },
//     [deleteContact.rejected]: (state, { payload }) => {
//       state.error = payload;
//       state.isLoading = false;
//     },
//   },
// });

// without Immer
const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    filter: '',
  },
  reducers: {
    addFilter(state, action) {
      return { ...state, filter: action.payload };
    },
  },
  extraReducers: {
    [fetchContacts.pending]: state => {
      return { ...state, isLoading: true };
    },
    [fetchContacts.fulfilled]: (state, { payload }) => {
      return { ...state, items: payload, isLoading: false };
    },
    [fetchContacts.rejected]: (state, { payload }) => {
      return { ...state, error: payload, isLoading: false };
    },

    [addContact.pending]: state => {
      return { ...state, isLoading: true };
    },
    [addContact.fulfilled]: (state, { payload }) => {
      return { ...state, isLoading: false, items: [...state.items, payload] };
    },
    [addContact.rejected]: (state, { payload }) => {
      return { ...state, error: payload, isLoading: false };
    },

    [deleteContact.pending]: state => {
      return { ...state, isLoading: true };
    },
    [deleteContact.fulfilled]: (state, { payload }) => {
      const newItems = state.items.filter(contact => contact.id !== payload);
      return { ...state, items: newItems, isLoading: false };
    },
    [deleteContact.rejected]: (state, { payload }) => {
      return { ...state, isLoading: false, error: payload };
    },
  },
});

export const { addFilter } = contactsSlice.actions;
export default contactsSlice.reducer;
