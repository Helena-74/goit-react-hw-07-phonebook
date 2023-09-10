import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContacts } from 'redux/operations';
import { selectVisibleContacts } from 'redux/selectors';

function ContactList() {
  const contacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();

  return (
    <ul>
      {contacts.map((contacts) => (
        <li key={contacts.id}>
          {contacts.name}: {contacts.number}
          <button onClick={() => dispatch(deleteContacts(contacts.id))}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ContactList;



