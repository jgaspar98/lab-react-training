import React from 'react';

function Boxcolor({ r, g, b }) {
    return (
        <div style={{backgroundColor: `rgb(${r},${g},${b}`,border:"solid black 2px", margin:"10px", padding:"10px", fontSize: "20px"}}>
        <p>rgb({r},{g},{b})</p>
    </div>
    )
    
}

export default Boxcolor