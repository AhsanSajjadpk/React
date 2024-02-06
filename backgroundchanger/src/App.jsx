import { useState } from 'react';
import './App.css';

function App() {
  const [colors, setColor] = useState("skyblue");
  const [name, setName] = useState("Color Name");


  return (


    <div className="fullbody" style={{ backgroundColor: colors }}>

      <h1 style={{color: 'white'}}>{name}</h1>
      <div className="btnGroup">

        <button onClick={() => {
          setColor("red")
          setName("Red")
        }} id='red' className='btn'>Red</button>
        <button onClick={() => {
          setColor("green")
          setName("Green")
        }} id='green' className='btn'>Green</button>
        <button onClick={() => {
          setColor("blue")
          setName("Blue")
        }} id='blue' className='btn'>Blue</button>
        <button onClick={() => {
          setColor("yellow")
          setName("Yellow")
        }} id='yellow' className='btn'>Yellow</button>
        <button onClick={() => {
          setColor("orange")
          setName("Orange")
        }} id='orange' className='btn'>Orange</button>
        <button onClick={() => {
          setColor("black")
          setName("Black")
        }} id='black' className='btn'>black</button>

      </div>


    </div>
  );
}

export default App;
