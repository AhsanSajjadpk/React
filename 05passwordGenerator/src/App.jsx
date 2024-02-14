import { useCallback, useEffect, useRef, useState } from 'react';
import './App.css';

// useState  -> state change karna ka lea use hota ha
// useCallback -> optimization ka lea || Function ko memorize karta ha
// useEffect -> page load + dependencies ma jab change aya ga us hook ka andar wala function call ho jaya ga
// useRef -> reference la ga


function App() {
  const [length, setLength] = useState(8);
  const [numAllow, setNumAllow] = useState(false);
  const [charAllow, setcharAllow] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numAllow) str += "0123456789";
    if (charAllow) str += "!@#$%&*-_=+";

    for (let i = 1; i <= length; i++) {


      let index = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(index)
      
      
    }
    
    setPassword(pass)



  }, [length, numAllow, charAllow, setPassword])


useEffect(()=>{
passwordGenerator();

},[length,numAllow,charAllow,passwordGenerator])



const passwordRef = useRef(null);
// input ma iska ak ref b baagan ga ->e.g  ref={passwordRef}

// here usecallback is optional
const copyPasswordToClipBoard = useCallback( ()=>{

  // iss sa pura password select hojaya ga + copy
  passwordRef.current?.select();
  // iss sa custom select hojaya ga + copy
  // passwordRef.current?.setSelectionRange(0,3);
  // isline sa just passowd copy ho jaya ga magar select nai hoga
  window.navigator.clipboard.writeText(password)
},[password]
)
  return (

    <div className="App">
      <div className='work'>




        <h1>Password Generator</h1>







        <div className="row">

          <input type="text" value={password} placeholder="Password" className="add-task" id="add" ref={passwordRef} readOnly/>
          <button onClick={copyPasswordToClipBoard} id="btn">Copy</button>

        </div>





        <div className=" row-range">

          <div className="chunk">
            <input type="range" defaultValue={length} className='range' min={8} max={20} onChange={(e) => { setLength(e.target.value) }} />
            <label htmlFor=""><p>Length:({length}) </p></label>
          </div>
          <div className="chunk">
            <input id='Num-inp' type="checkbox" defaultChecked={numAllow} onChange={()=>{setNumAllow((prev) => !prev)}} className='check' />
            <label htmlFor="Num-inp">Numbers</label>

          </div>
          <div className="chunk">
            <input id='char-inp' defaultChecked={charAllow} type="checkbox" onChange={()=>{setcharAllow((prev) => !prev)}} className='check' />
            <label htmlFor="char-inp">Character</label>
    
          </div>
        </div>


         {/* ak tariqa ya ha ka direct btn pr onclick sa use 
        call back wala ( ) sa pass generate ho jaya */}
        {/* <button style={{margin : "0px 270px"}} id="btn" onClick={passwordGenerator}>Generate</button> */}

      <p>developed by <a target='_blank' href="https://github.com/ahsansajjadpk"> Ahsan Sajjad</a> </p>
      </div>


    </div>
  );
}

export default App;
