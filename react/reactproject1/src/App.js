// import logo from './logo.svg';
import './App.css';
import ClassCom from './component/ClassCom';
import ConditionalRendering from './component/ConditionalRendering';
import CssComp from './component/CssComp';
import EventComp from './component/EventCom';
import FunctionCom from './component/FunctionCom';
import MyStateComp from './component/MyStateComp';
import BejeshFunComp from './task/BejeshFunComp';
import MyCounterComp from './task/MyCounterComp';


function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
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
      </header> */}

      <h1>Welcome to React</h1>
      
      {/* <FunctionCom fname="Sriram" post="Software developer"/> */}
      {/* <BejeshFunComp fname="Bejesh" lname="Sriram" salary={12000} gender="Male" address="Chennai"/> */}
      {/* <ClassCom fname="Sriram" post="Software developer"/> */}

      {/* <EventComp /> */}
      <MyCounterComp />
      {/* <MyStateComp /> */}

      {/* <ConditionalRendering /> */}

      <CssComp />

    </div>
  );
}

export default App;
