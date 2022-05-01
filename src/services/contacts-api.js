import axios from 'axios';

axios.defaults.baseURL = 'https://6246fbdee3450d61b005759b.mockapi.io/';

export async function fetchContacts() {
  const response = await axios.get('/contacts');
  return response.data;
}

export const addContact = contact => {
  return axios.post('/contacts', contact).then(({ data }) => data);
};

export const deleteContact = id => {
  return axios.delete(`/contacts/${id}`);
};
