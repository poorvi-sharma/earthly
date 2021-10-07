import React, {useState} from 'react';
import './App.css';

function App() {
  const [heading, changeHeading] = useState("This is a simple React App example");
  let newHeading = () =>
  {
    let val = heading;
    (val === 'This is a simple React App example') ? 
    changeHeading('Hello World') : changeHeading('This is a simple React App example');
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>{heading}</h1>
        <button className="btn" onClick={newHeading}>Click Me</button>
      </header>
    </div>
  );
}

export default App;
