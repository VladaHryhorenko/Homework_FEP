import React from 'react';

const ButtonSection = ( { actionSetColor , color} ) => {
    return (
        <>
            <button color onClick={()=>{actionSetColor('#4abb5f')}} style={{background: color}} className="green">Green</button>
            <button color onClick={()=>{actionSetColor('#ea2128')}} style={{background: color}} className="red">Red</button>
            <button color onClick={()=>{actionSetColor('#73b7d8')}} style={{background: color}} className="blue">Blue</button>
        </>
    )
}

export default ButtonSection;