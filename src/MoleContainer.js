import React, { useState, useEffect } from 'react';
import Mole from './Mole';

function MoleContainer({ setScore }) {
    const [displayMole, setDisplayMole] = useState(false);

    useEffect(() => {
        const randMilliseconds = Math.random() * 5000;
        const timer = setTimeout(() => {
            setDisplayMole(true);
            setTimeout(() => setDisplayMole(false), 3000); // Mole is visible for 3 second
        }, randMilliseconds);

        return () => clearTimeout(timer);
    }, []);

    const handleClick = () => {
        setDisplayMole(false);
        setScore((score) => score + 1);
    };

    return displayMole ? <Mole handleClick={handleClick} /> : <div className="moleHill"></div>;
}

export default MoleContainer;
