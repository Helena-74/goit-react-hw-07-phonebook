import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContacts } from 'redux/operations';
import { selectVisibleContacts } from 'redux/selectors';
import styles from './ContactList.module.css';

function ContactList() {
  const contacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();

  return (
    <ul className={styles.list}>
    {contacts.map((contact) => (
      <li className={styles.li} key={contact.id}>
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



