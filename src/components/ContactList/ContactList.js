import ContactItem from './ContactItem';
import s from './ContactList.module.css';
export default function ContactList({ contacts, handleDelItem }) {
  return (
    <>
      <h2 className={s.title}>Contacts</h2>
      <ul>
        {contacts.map(contact => (
          //       <li key={contact.id}>
          //   {contact.name}: <span>{contact.number}</span>
          //   <button type="button" id={contact.id} onClick={() => handleDelItem(contact.id)}>
          //     del
          //   </button>
          // </li>
          <ContactItem
            key={contact.id}
            contact={contact}
            handleDelItem={handleDelItem}
          />
        ))}
      </ul>
    </>
  );
}
