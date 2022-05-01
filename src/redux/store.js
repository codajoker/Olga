import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';

import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import contactsReducers from './contacts/contactsReducer';

const store = configureStore({
  reducer: {
    contacts: contactsReducers,
  },

  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    logger,
  ],
});

export default store;
