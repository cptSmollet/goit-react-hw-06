import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';
import { store, persistor } from './redux/store';  // Импорт store и persistor
import './App.css';

const App = () => {
  return (
    <Provider store={store}>  {/* Оборачиваем приложение в Provider */}
      <PersistGate loading={null} persistor={persistor}>
        <div className="appContainer">
          <h1 className="title">Phonebook</h1>
          <ContactForm />
          <h2 className="subtitle">Contacts</h2>
          <Filter />
          <ContactList />
        </div>
      </PersistGate>
    </Provider>
  );
};

export default App;

