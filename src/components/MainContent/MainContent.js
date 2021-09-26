import React, { useEffect, useState } from 'react';
import Band from '../Band/Band';
import "./MainContent.css";

const MainContent = () => {
    // Use State
    const [bands, setBands] = useState([]);
    useEffect(() => {
        // Fetch Data
        fetch("./bands.JSON")
            .then(response => response.json())
            .then(data => setBands(data))
    }, []);
    return (
        <div className="main-content-container">
            <div className="bands-container">
                {
                    bands.map(band => <Band
                        key={band.key}
                        band={band}
                    ></Band>)
                }
            </div>
            <div className="cart-container">
                <h2>Invitation Summary</h2>
            </div>
        </div>
    );
};

export default MainContent;