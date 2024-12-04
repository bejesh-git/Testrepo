import logo from './logo.svg';
import './App.css';
import ClassCom from './component/ClassCom';
import ClickCounterComp from './component/ClickCounterComp';
import ConditionalRendering from './component/ConditionalRendering';
import CssComp from './component/CssComp';
import ErrorBoundaryComp from './component/ErrorBoundaryComp';
import EventComp from './component/EventCom';
import FunctionCom from './component/FunctionCom';
import HowerCounterCom from './component/HowerCounterCom';
import MyHocComp from './component/MyHocComp';
import MyImagesCom from './component/MyImagesCom';
import MyStateComp from './component/MyStateComp';
import ParentComp from './component/ParentComp';
import UserComp from './component/UserComp';
import VirtualDOM from './component/VirtualDOM';
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
      {/* <MyCounterComp /> */}
      {/* <MyStateComp /> */}

      {/* <ConditionalRendering /> */}

      {/* <CssComp /> */}

      {/* <ParentComp gender="Male" contact={9804543222}/> */}

      {/* <ClickCounterComp /> */}

      {/* <HowerCounterCom /> */}

      {/* <MyImagesCom /> */}

      {/* <ErrorBoundaryComp >
        <UserComp user = "Bejesh"/>
      </ErrorBoundaryComp>
      <ErrorBoundaryComp>
        <UserComp user = "Raheem"/>
      </ErrorBoundaryComp>
      <ErrorBoundaryComp>
        <UserComp user = "Anbu"/>
      </ErrorBoundaryComp> */}

        <VirtualDOM />


    </div>
  );
}

export default App;
