import React from 'react';
// import './random.css';



function Random({ min, max }) {

    function getRandom(max) {
        return Math.floor(Math.random() * max);
    }

    return (
        <div className='random'>
            <p> Random number between {min} and {max} = {getRandom(max)} </p>
        </div>
    )
    
}

    // Math.floor(Math.random() * 6)
    // Math.floor(Math.random() * 100)

export default Random