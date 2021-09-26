import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react'

function App() {
  const [data, setData] = useState();
  useEffect(()=> {
    fetch('http://localhost:5000')
  .then(response => 
  response.json())
  .then(data => setData(data));
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React {data && data.res}
        </a>
      </header>
    </div>
  );
}

export default App;
