import React from 'react';
import './App.css';

import APOD from './Components/APOD';

function App() {
  return (
    <div className="App">
      {/* <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p> */}
      <APOD />
    </div>
  );
}

export default App;
