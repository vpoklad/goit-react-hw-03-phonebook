export default function ContactItem({ contact, handlDelItem }) {
  return (
    <li>
      {contact.name}: <span>{contact.number}</span>
      <button type="button" onClick={() => handlDelItem(contact.id)}>
        del
      </button>
    </li>
  );
}
