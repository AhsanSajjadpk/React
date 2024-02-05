import './App.css';
import Card from './Components/Card';
import Head from './Components/Head';

function App() {


  // we can also pass obj, array arrayof objects in props

  //  let obj ={
  //   fname: "ahsan",
  //   lname: "sajjad"
  //  }

  return (
    <div className="App">

      <Head />

      <div className="row1">

        <Card name="Supra" type="vehicle" /><Card name="vigo" type="vehicle" />

      </div>





      {/* <Card name={obj} />
        <Card name={obj}/> */}




    </div>
  );
}

export default App;
