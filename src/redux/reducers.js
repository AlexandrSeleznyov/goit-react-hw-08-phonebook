import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import {
  deleteContactsOperation,
  fetchContacts,
  addContactsOperation,
} from "./operations";

import * as Action from "./actions";

const filter = createReducer("", {
  [Action.filterContacts]: (_, { payload }) => payload,
});

const contacts = createReducer([], {
  [fetchContacts.fulfilled]: (_, { payload }) => payload,
  [deleteContactsOperation.fulfilled]: (_, { payload }) => payload,
  [addContactsOperation.fulfilled]: (_, { payload }) => payload,
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
