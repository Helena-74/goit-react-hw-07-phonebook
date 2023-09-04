import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contactsSlice';
import styles from './ContactForm.module.css';

function ContactForm() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addContact({ name, number }));
    setName('');
    setNumber('');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label>
        Name
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>
      <label>
        Number
        <input
          type="tel"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          required
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
}

export default ContactForm;


// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { v4 as uuidv4 } from 'uuid';
// import styles from './ContactForm.module.css';
// import { addContact } from 'redux/contactsSlice';
// import { getContacts } from 'redux/selectors';

// function ContactForm() {
//   const dispatch = useDispatch();
//   const [name, setName] = useState('');
//   const [number, setNumber] = useState('');
//   const contacts = useSelector(getContacts);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const existingContact = contacts.find(
//       (contact) => contact.name === name || contact.number === number
//     );
//     if (existingContact) {
//       alert('Цей контакт вже існує!');
//       setName('');
//       setNumber('');
//     } else {
//     dispatch(addContact({ id: uuidv4(), name, number }));
//     setName('');
//     setNumber('');
//     }
//   };

//   return (
//     <form className={styles.form} onSubmit={handleSubmit}>
//       <label>
//         Name
//         <input
//           type="text"
//           name="name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//           title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//           required
//         />
//       </label>
//       <label>
//         Number
//         <input
//           type="tel"
//           name="number"
//           value={number}
//           onChange={(e) => setNumber(e.target.value)}
//           pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
//           title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//           required
//         />
//       </label>
//       <button type="submit">Add contact</button>
//     </form>
//   );
// }

// export default ContactForm;


