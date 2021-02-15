import logo from './logo.svg';
import './App.css';
// import HelloCullen file - client side with React
import HelloCullen from './HelloCullen';

// if this was node
// const HelloCullent = require('/')

// App is a component - React is made up of components
// a component is a function that return JSX
function App() {
  let name = 'John';

  let myH1 = <h1>Go home, {name}, you're drunk</h1>; // you can assign HTML to a variable

  // HTML is actually "JSX"
  // Javascript eXtended
  // as in App.jsx
  return (
    <div className="App">
      {myH1}
      <header className="App-header">
        {/*HelloCullen is a React component*/}
        <HelloCullen />

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
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
