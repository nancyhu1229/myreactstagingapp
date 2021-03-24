import logo from './logo.svg';
import './App.css';

//首字母大写的，都是组件 App组件
function App() {
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
          Learn React 111we tao lala 

        </a>
      </header>
    </div>
  );
}

//默认暴露，分别暴露区别是什么？
export default App;
