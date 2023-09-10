import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContacts } from 'redux/operations';
import { selectVisibleContacts } from 'redux/selectors';

function ContactList() {
  const contacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();

  return (
    <ul>
    {contacts.map((contact) => (
      <li key={contacts.id}>
        {contact.name}: {contact.phone}
        <button onClick={() => dispatch(deleteContacts(contact.id))}>
          Delete
        </button>
      </li>
    ))}
  </ul>
  );
}

export default ContactList;



