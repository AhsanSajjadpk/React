import React, { useState } from "react";

function States() {
    const [tas, settas] = useState(0);

    const handle = () => {
        // Use the updater function form of setState to update based on the previous state
      

            settas(tas + 1);
            
 
        // else if (a==2){
            
        //     settas(tas - 1);
        // }
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
