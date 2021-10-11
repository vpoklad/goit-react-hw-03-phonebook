import ContactItem from './ContactItem';
export default function ContactList({ contacts, handleDelItem }) {
  return (
    <>
      <h2>Contacts</h2>
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
