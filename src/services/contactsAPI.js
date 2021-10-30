import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000";

export async function getContacts() {
  const { data } = await axios.get("/contacts");
  return data;
}

export async function addContacts(newContact) {
  const res = await axios.post("/contacts", newContact);
  return res;
}

export async function deleteContacts(id) {
  const res = await axios.delete(`/contacts/${id}`);
  return res;
}
