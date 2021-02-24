import React from 'react';
import './greatings.css'

function Greatings({lang, children}) {
    let greet;
    switch (lang) {
        case 'de':
            greet = 'Hallo';
            break;
        case 'en':
            greet = 'Hello';
            break;
        case 'fr':
            greet = 'Bonjour';
            break;
        case 'it':
            greet = 'Ciao';
            break;
        case 'es':
            greet = 'Hola'
            break;
        default:
            greet = 'Hi'
            break;
    }
    return (
        <div className='greatings'>
            <p>{greet}{children}</p>
        </div>
    )
}

export default Greatings