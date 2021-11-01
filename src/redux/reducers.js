import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import {
  deleteContactsOperation,
  fetchContacts,
  addContactsOperation,
} from "./operations";

import * as action from "./actions";

const filter = createReducer("", {
  [action.filterContacts]: (_state, { payload }) => payload,
});

const contacts = createReducer([], {
  [fetchContacts.fulfilled]: (_state, { payload }) => payload,
  [deleteContactsOperation.fulfilled]: (_state, { payload }) => payload,
  [addContactsOperation.fulfilled]: (_state, { payload }) => payload,
});

const getIsLoading = createReducer(false, {
  [fetchContacts.pending]: () => true,
  [fetchContacts.fulfilled]: () => false,
  [fetchContacts.rejected]: () => false,
});

export default combineReducers({
  contacts,
  filter,
  getIsLoading,
});
