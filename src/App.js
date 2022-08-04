import { useState } from "react";

// import logo from './logo.svg';
import "./App.css";

const styles = {
  title: {
    fontSize: 36,
    fontWeight: '900',
    color: 'khaki'
  },
  screen: {
    backgroundColor: 'black',
    padding: 16
  }
}

function App() {
  const [total, setTotal] = useState(0);

  let digits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  return (
    <div className="App">
      <header className="App-header">
        <div style={styles.title}>Total: {total} </div>
        <div id="calculator">

        {digits.map((digit) => {
          return <button key={digit} onClick={()=>{
            setTotal(total + digit)
          }}>{digit}
          </button>;
        })}

        <button onClick={() => {setTotal(total * 0);}}>reset</button>
        </div>

        {/* <button
          onClick={() => {
            setTotal(total + 9);
          }}
          >
          9
          </button>
          <button
          onClick={() => {
            setTotal(total + 8);
          }}
          >
          8
          </button>
          <button
          onClick={() => {
            setTotal(total + 7);
          }}
          >
          7
          </button>
          <button
          onClick={() => {
            setTotal(total + 6);
          }}
          >
          6
          </button>
          <button
          onClick={() => {
            setTotal(total + 5);
          }}
          >
          5
          </button>
          <button
          onClick={() => {
            setTotal(total + 4);
          }}
          >
          4
          </button>
          <button
          onClick={() => {
            setTotal(total + 3);
          }}
          >
          3
          </button>
          <button
          onClick={() => {
            setTotal(total + 2);
          }}
          >
          2
          </button>
          <button
          onClick={() => {
            setTotal(total + 1);
          }}
          >
          1
          </button>
          <button
          onClick={() => {
            setTotal(total + 0);
          }}
          >
          0
        </button> */}

        {/* <button
          onClick={() => {
            setTotal(total * 0);
          }}
        >
          reset
        </button> */}
{/* 
        <button
          onClick={() => {
            setTotal(total +=);
          }}
        >
          +
        </button> */}

        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
