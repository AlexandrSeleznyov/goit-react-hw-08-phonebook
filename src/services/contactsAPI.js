import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000";

export async function getContacts() {
  const { data } = await axios.get("/contacts");
  return data;
}

export async function addContacts(newContact) {
  return await axios.post("/contacts", newContact);
}

export async function deleteContacts(id) {
  return await axios.delete(`/contacts/${id}`);
}
