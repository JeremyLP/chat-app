import React from 'react';
import './chat-app.css';
import './App.css';
import ContactList from './components/ContactList.js';

function App() {
  return (
    <div className="App">
      <ContactList
        name=""
        lastName=""
        img=""
        online=""
        email=""
        birthday=""
      />

    </div>
  );
}

export default App;
