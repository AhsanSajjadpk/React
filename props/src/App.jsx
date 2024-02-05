import logo from './logo.svg';
import './App.css';
import Card from './Components/Card';

function App() {

  let val1 = "car"
  let val2 = "Suppra"

  return (
    <div className="App">

      <div className='row1'>
        <Card />
        <Card />
        <Card />
      </div>

      <div className='row1'>
        <Card />
        <Card />
        <Card />
      </div>

      <div className='row1'>
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default App;
