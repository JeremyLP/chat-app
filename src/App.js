import React from 'react';
import './chat-app.css';
import './App.css';
import Contact from './components/Contact.js';

function App() {
  return (
    <div className="App">
      <Contact
        name="Gary Richard"
        img="https://randomuser.me/api/portraits/men/9.jpg"
        online={true}
      />

      <Contact

        name="John Snyder"
        img="https://randomuser.me/api/portraits/men/41.jpg"
        online={false}

      />

      <Contact

        name="Paul Burton"
        img="https://randomuser.me/api/portraits/men/75.jpg"
        online={false}

      />
    </div>
  );
}

export default App;
