import './App.css';
import Navbar from './Components/Navbar';
import TextBox from './Components/TextBox';

function App() {
  return (
    <div>
      <Navbar title="TextUtility" about="About us"></Navbar>
      <div className="container">
      <TextBox heading="Enter the text"/>
      </div>
    </div>
  );
}

export default App;
