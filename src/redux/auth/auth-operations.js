import { createAsyncThunk } from '@reduxjs/toolkit';

import * as usersAPI from '../../services/users-api';
const { token } = usersAPI;

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkApi) => {
    try {
      const regUser = await usersAPI.registerUser(credentials);
      token.set(regUser.token);
      return regUser;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (credentials, thunkApi) => {
    try {
      const loginUser = await usersAPI.loginUser(credentials);
      token.set(loginUser.token);
      return loginUser;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const logout = createAsyncThunk('auth/logout', async thunkApi => {
  try {
    await usersAPI.logoutUser();
    token.unset();
  } catch (error) {
    return thunkApi.rejectWithValue(error);
  }
});

export const refresh = createAsyncThunk('auth/refresh', async (_, thunkApi) => {
  const state = thunkApi.getState();
  const persistedToken = state.auth.token;

  if (persistedToken === null) {
    return thunkApi.rejectWithValue();
  }
  token.set(persistedToken);
  try {
    const user = await usersAPI.currentUser();
    return user;
  } catch (error) {
    return thunkApi.rejectWithValue(error);
  }
});
