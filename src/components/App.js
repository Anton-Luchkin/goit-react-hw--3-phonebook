import React, { Component } from 'react';

import Wrapper from './Wrapper/Wrapper';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

import ShortId from 'shortid';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    this.setState({ contacts: parsedContacts });

    if (parsedContacts) {
      this.setState({ todos: parsedContacts });
    }
  }

  componentDidUpdate(prevState) {
    const { contacts } = this.state;
    if (contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }

  addContact = ({ name, number }) => {
    const { contacts } = this.state;

    const message = `${name} is already in contacts`;

    for (const contact of contacts) {
      if (name === contact.name) {
        alert(message);
        return;
      }
    }

    const contact = {
      id: ShortId.generate(),
      name,
      number,
    };

    this.setState(({ contacts }) => {
      return { contacts: [contact, ...contacts] };
    });
  };

  changeFilter = ({ target }) => {
    this.setState({ filter: target.value });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  deleteContact = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(
          contact => contact.id !== contactId,
        ),
      };
    });
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();

    return (
      <Wrapper>
        <div>
          <h2>Phonebook</h2>
          <ContactForm onSubmitForm={this.addContact} />
          <Filter value={filter} onChange={this.changeFilter} />
          <h2>Contacts</h2>
          <ContactList
            contacts={visibleContacts}
            onDeleteContact={this.deleteContact}
          />
        </div>
      </Wrapper>
    );
  }
}

export default App;
