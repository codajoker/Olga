// ванильный редакс

// import * as contactsActions from './contactsActions';
// import * as contactsAPI from '../../services/contacts-api';

// export const fetchContacts = () => async dispatch => {
//   dispatch(contactsActions.fetchContactsRequest());

//   try {
//     const contacts = await contactsAPI.fetchContacts();
//     dispatch(contactsActions.fetchContactsSuccess(contacts));
//   } catch (error) {
//     dispatch(contactsActions.fetchContactsError(error));
//   }
// };

// export const addContact = contact => async dispatch => {
//   dispatch(contactsActions.addContactRequest());

//   try {
//     const newContact = await contactsAPI.addContact(contact);
//     dispatch(contactsActions.addContactSuccess(newContact));
//   } catch (error) {
//     dispatch(contactsActions.addContactError(error));
//   }
// };

// export const deleteContact = id => async dispatch => {
//   dispatch(contactsActions.deleteContactRequest());

//   try {
//     await contactsAPI.deleteContact(id);
//     dispatch(contactsActions.deleteContactSuccess(id));
//   } catch (error) {
//     dispatch(contactsActions.deleteContactError(error));
//   }
// };

// используем redux-thunk

import { createAsyncThunk } from '@reduxjs/toolkit';
import * as contactsAPI from '../../services/contacts-api';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, thunkApi) => {
    try {
      const contacts = await contactsAPI.fetchContacts();
      return contacts;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contac, thunkApi) => {
    try {
      const contact = await contactsAPI.addContact(contac);
      return contact;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkApi) => {
    try {
      await contactsAPI.deleteContact(id);
      return id;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);
