import React, { useState } from "react";

function States() {
    // usestate
    let [tas, settas] = useState(0);



    return (
        <div>
            <h1>Tasbeeh</h1>
            <h1>{tas}</h1>


            <button onClick={() => { settas(tas + 1); }}>Increment</button>


            <button onClick={() => {

                if (tas >= 1) { settas(tas - 1) }

            }}>decrement</button>


        </div>
    );
}

export default States;
