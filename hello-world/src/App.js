import logo from './logo.svg';
import './App.css';
import UseState from './components/UseState/UseState';
import UseReducer from './components/UseReducer/UseReducer';
import ObjectUserState from './components/Immutable State/ObjectUserState';
import ArrayUseState from './components/Immutable State/ArrayUseState';
import Parent from './components/Parent Child/Parent'
function App() {
  return (
    <div className="App">
      <Parent />
      {/* <ArrayUseState /> */}
      {/* <ObjectUserState /> */}
      {/* <UseReducer /> */}
      {/* <UseState />  */}
    </div>
  );
}

export default App;
