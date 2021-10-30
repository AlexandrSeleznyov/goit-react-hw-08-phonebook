import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getContacts,
  addContacts,
  deleteContacts,
} from "../services/contactsAPI";
// import {
//   fetchContactsSuccsess,
//   fetchContactsRequest,
//   fetchContactsError,
//   fetchAddContacts,
// } from "./actions";

// export const fetchContactsOperation = () => async (dispatch) => {
//   dispatch(fetchContactsRequest());
//   try {
//     const contacts = await getContacts();
//     dispatch(fetchContactsSuccsess(contacts));
//   } catch (error) {
//     dispatch(fetchContactsError(error));
//   }
// };

export const fetchContacts = createAsyncThunk(
  "fetchContacts",
  async (_, { rejectWithValue }) => {
    try {
      return await getContacts();
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteContactsOperation = createAsyncThunk(
  "deleteContactsOperation",
  async (id, { rejectWithValue }) => {
    try {
      const res = await deleteContacts(id);

      return await getContacts();
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const addContactsOperation = createAsyncThunk(
  "addContactsOperation",
  async (value, { rejectWithValue }) => {
    try {
      const res = await addContacts(value);

      return await getContacts();
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
