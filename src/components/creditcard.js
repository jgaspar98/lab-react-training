import React from 'react';
import './creditcard.css';


function Creditcard({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) {
    const newNumber = "**** **** **** " + number.slice(-4);
    let month;
    if(expirationMonth < 10) {
        month = `0${expirationMonth}`;
    } else {
        month = expirationMonth;
    }
    return (
        <div style={{ backgroundColor: `${bgColor}`, color:`${color}`, padding: "15px", width: "350px", fontSize: "20px", borderRadius: "15px" }}>
            <p style={{ textAlign: "right" }}>{type}</p>
            <p style={{ fontSize: "26px" }}>{newNumber}</p>
            <p style={{ textAlign: "left" }}>Expires {month}/{JSON.stringify(expirationYear).slice(-2)} {bank}</p>
            <p style={{textAlign: "left"}}>{owner}</p>
        </div>
    )
}

export default Creditcard;