import { combineReducers } from 'redux';
// import { composeWithDevTools } from "redux-devtools-extension"
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import contactsReducer from './contacts-reducer';

// const store = createStore(rootReducer, composeWithDevTools());
const defaultMiddleware = getDefaultMiddleware();
const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
  middleware: [...defaultMiddleware],
});

export default store;
