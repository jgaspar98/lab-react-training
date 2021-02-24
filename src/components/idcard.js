import React from 'react';
import './idcard.css'

function Idcard({picture,firstName, lastName, gender, height, birth}) {
    return (
        <div className='Idcard'> 
            <img src={picture} />
            <div className='info'>
                <strong>First name: {firstName}</strong>
                <strong>Last name: {lastName}</strong>
                <strong>Gender: {gender}</strong>
                <strong>Height: {height}</strong>
                <strong>Birth {birth.toDateString()}</strong>
            </div>
       </div>
    )
}

export default Idcard;