import React from 'react';
import './chat-app.css';
import './App.css';
import ContactList from './components/ContactList.js';

function App() {
  return (
    <div className="App">
      <ContactList
        name="Gary Richard"
        lastName="Georgette"
        img="https://randomuser.me/api/portraits/men/9.jpg"
        online={true}
        email=""
        birthday=""
      />

    </div>
  );
}

export default App;
