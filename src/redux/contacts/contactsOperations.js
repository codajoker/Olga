// используем redux-thunk

import { createAsyncThunk } from '@reduxjs/toolkit';
import * as contactsAPI from '../../services/contacts-api';
// const { token } = contactsAPI;

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, thunkApi) => {
    // const state = thunkApi.getState();
    // const persistedToken = state.auth.token;

    // token.set(persistedToken);
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
