import contactActions from './contacts-actions';
import axios from 'axios';
import contactsActions from './contacts-actions';

const addContact = data => dispatch => {
  dispatch(contactsActions.addContactRequest());
  axios
    .post('http://127.0.0.1:2000/contacts', { ...data })
    .then(response => {
      console.log(response.data);
      dispatch(contactsActions.addContactSucess(response.data));
    })
    .catch(error => dispatch(contactsActions.addContactError(error)));
};

const fetchContacts = () => dispatch => {
  dispatch(contactsActions.fetchContactsRequest());
  axios
    .get('http://127.0.0.1:2000/contacts')
    .then(({ data }) => dispatch(contactsActions.fetchContactsSucess(data)))
    .catch(error => dispatch(contactsActions.fetchContactsError(error)));
};

const deleteContact = id => dispatch => {
  dispatch(contactsActions.deleteContactsRequest());
  axios
    .delete(`http://127.0.0.1:2000/contacts/${id}`)

    .then(() => dispatch(contactsActions.deleteContactsSucess(id)))
    .catch(error => dispatch(contactsActions.deleteContactsError(error)));
};

export default {
  addContact,
  fetchContacts,
  deleteContact,
};
