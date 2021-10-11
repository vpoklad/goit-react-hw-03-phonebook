import ContactItem from './ContactItem';
import s from './ContactList.module.css';
export default function ContactList({ contacts, handleDelItem }) {
  return (
    <>
      <h2 className={s.title}>Contacts</h2>
      <ul>
        {contacts.map(contact => (
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
