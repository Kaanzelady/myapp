import logo from './logo.svg';
import './App.scss';
import MyComponent from './example/MyComponent';
/**
 * 2 components: class component / function component ( function, arrow)
 * JSX
 * một hàm return html tạo ra một khối UI chính là một component
 */

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>Hello</h1>
        <MyComponent></MyComponent>
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
