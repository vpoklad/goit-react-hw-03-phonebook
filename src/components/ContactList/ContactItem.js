export default function ContactItem({ contact, handleDelItem }) {
  return (
    <li>
      {contact.name}: <span>{contact.number}</span>
      <button
        type="button"
        id={contact.id}
        onClick={() => handleDelItem(contact.id)}
      >
        del
      </button>
    </li>
  );
}
