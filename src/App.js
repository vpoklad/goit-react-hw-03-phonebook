// import './App.css';

import { Component } from 'react/cjs/react.production.min';
// import { v4 as uuid } from 'uuid';

import ContactsForm from './components/ContactsForm/ContactsForm';
import ContactList from './components/ContactList/ContactList';

class App extends Component {
  state = {
    contacts: [],
    name: '',
  };
  onSubmitForm = contact => {
    this.setState(prev => {
      return {
        contacts: [...prev.contacts, contact],
      };
    });
  };

  render() {
    return (
      <div className="app">
        <h1>Phonebook</h1>
        <ContactsForm addNewContact={this.onSubmitForm} />
        <ContactList contacts={this.state.contacts} />
      </div>
    );
  }
}

export default App;
