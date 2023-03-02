import { combineReducers, configureStore } from '@reduxjs/toolkit';
import messageReducer, { getMessage } from './messages/messages';

const reducer = combineReducers({
  messageReducer,
});

const store = configureStore({
  reducer,
});

store.dispatch(getMessage());
export default store;
