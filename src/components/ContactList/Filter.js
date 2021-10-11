import TextField from '@mui/material/TextField';
export default function Filter({ value = ' ', handlChange }) {
  return (
    <>
      <TextField
        id="standard-search"
        label="Find contacts by name"
        type="search"
        variant="standard"
        value={value}
        onChange={handlChange}
      />
    </>
    // <label>
    //   Find contacts by name
    //   <input
    //     type="text"
    //     name="filter"
    //     value={value}
    //     onChange={handlChange}
    //     pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
    //     title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
    //   />
    // </label>
  );
}
