import React, { useState } from "react";

function CountMiddle(){

    const [count, setCount] = useState(0)

    function addFifty(){
        setCount(50)
    }

    function addValue(){
        setCount(current)
    }

    return(
            <div>
                <center>
                    <h4 className="btn-text">{count}</h4>
                    <button className="timeButton" onClick={addFifty}>CLICK ME</button>
                    <button className="timeButton" onClick={() => addValue(200)}>CLICK ME</button>
                </center>
            </div>
    )
}


export default CountMiddle