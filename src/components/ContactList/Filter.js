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
  );
}
