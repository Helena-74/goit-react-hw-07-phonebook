import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { selectVisibleContacts } from 'redux/selectors';

function ContactList() {
  const contacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();

  return (
    <ul>
      {contacts.map((contact) => (
        <li key={contact.id}>
          {contact.name}: {contact.number}
          <button onClick={() => dispatch(deleteContact(contact.id))}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ContactList;


// import ContactItem from 'components/ContactItem/ContactItem';
// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { deleteContact } from 'redux/contactsSlice';
// import { getContacts, getFilter } from 'redux/selectors';

// function ContactList() {
//   const contacts = useSelector(getContacts);
//   const filter = useSelector(getFilter);
//   const dispatch = useDispatch();

//   const filteredContacts = contacts.filter((contact) =>
//     contact.name.toLowerCase().includes(filter.toLowerCase())
//   );

//   return (
//     <ul>
//       {filteredContacts.map((contact) => (
//         <ContactItem
//           key={contact.id}
//           name={contact.name}
//           number={contact.number}
//           onDeleteContact={() => dispatch(deleteContact(contact.id))}
//         />
//       ))}
//     </ul>
//   );
// }

// export default ContactList;


