import { Component } from 'react';
import { v4 as uuid } from 'uuid';

export default class ContactsForm extends Component {
  state = {
    name: '',
    number: '',
    contact: null,
  };
  resetForm = () => {
    this.setState({
      name: '',
      number: '',
    });
    console.log('reset');
  };
  handleInput = e => {
    const name = e.target.name;
    this.setState({ [name]: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();

    const { name, number } = this.state;
    const contact = {
      name,
      number,
      id: uuid(),
    };
    this.setState({ contact });
    this.resetForm();
    this.props.addNewContact(contact);
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">
          Name
          <input
            onChange={this.handleInput}
            id="name"
            type="text"
            name="name"
            value={this.state.name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </label>
        Number
        <label htmlFor="number">
          <input
            onChange={this.handleInput}
            id="number"
            value={this.state.number}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
          />{' '}
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}
