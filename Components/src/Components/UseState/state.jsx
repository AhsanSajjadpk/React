import React, { useState } from "react";

function States() {
    let [tas, settas] = useState(0);

    const handle = () => {
        

            settas(tas + 1);
            
 
    };

    return (
        <div>
            <h1>Tasbeeh</h1>
            <h1>{tas}</h1>
            <button onClick={handle}>Increment</button>
            
        </div>
    );
}

export default States;
