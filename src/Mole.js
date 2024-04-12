
import React from 'react';
import moleImg from './images/mole.png'; 

function Mole({ handleClick }) {
    return (
        <div onClick={handleClick}>
            <img src={moleImg} alt="Mole" style={{ width: '30vw', cursor: 'pointer' }} />
        </div>
    );
}

export default Mole;
