import { useState } from "react";

function ToggleButton () {

    const [isOn, setIsOn] = useState(true);

    const toggle =() =>{

        setIsOn(!isOn);

    }

    return(
        <>
        <p>The Button Is {isOn ? "On" :"Off" }</p>
        <button onClick={toggle}>Turn {isOn ? "Off" :"On" } </button>
        
        </>
    )
}
export default ToggleButton;