import ContactItem from 'components/ContactItem/ContactItem';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { getContacts, getFilter } from 'redux/selectors';

function ContactList() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul>
      {filteredContacts.map((contact) => (
        <ContactItem
          key={contact.id}
          name={contact.name}
          number={contact.number}
          onDeleteContact={() => dispatch(deleteContact(contact.id))}
        />
      ))}
    </ul>
  );
}

export default ContactList;


