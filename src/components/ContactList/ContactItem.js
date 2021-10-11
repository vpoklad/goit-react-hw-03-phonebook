import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import s from './ContactList.module.css';
export default function ContactItem({ contact, handleDelItem }) {
  return (
    <li className={s.item}>
      <span>
        {contact.name}: <span>{contact.number}</span>
      </span>
      <IconButton
        aria-label="delete"
        id={contact.id}
        onClick={() => handleDelItem(contact.id)}
      >
        <DeleteIcon />
      </IconButton>
    </li>
  );
}
