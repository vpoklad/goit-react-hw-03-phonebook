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

    const { name } = this.state;
    const contact = {
      name,
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
          {' '}
          Name
          <input
            onChange={this.handleInput}
            type="text"
            name="name"
            value={this.state.name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}
