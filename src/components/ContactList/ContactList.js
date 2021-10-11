export default function ContactList({ contacts }) {
  return (
    <>
      <h2>Contacts</h2>
      <ul>
        {contacts.map(contact => (
          <li key={contact.id}>
            {contact.name}: <span>{contact.number}</span>
          </li>
        ))}
      </ul>
    </>
  );
}
