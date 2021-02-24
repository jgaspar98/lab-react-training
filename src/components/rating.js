import React from 'react';


function Rating({children}) {
    let stars = '';
    const numberOfStars = Math.round(children);
    for(let i=0; i < numberOfStars; i++){
        stars += "★"
    }
    for(let i=0; i < 5-numberOfStars; i++){
        stars += "☆"
    }
    return (
        <div>
            <p style={{fontSize: "30px", textAlign:"left", padding: "0", margin: "0"}}>{stars}</p>
        </div>
    )
}

export default Rating