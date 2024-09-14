import React from 'react';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';
import './App.css';

const App = () => {
  return (
    <div className="appContainer">
      <h1 className="title">Phonebook</h1>
      <ContactForm />
      <h2 className="subtitle">Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};

export default App;

