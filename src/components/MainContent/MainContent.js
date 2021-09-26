import React, { useEffect, useState } from 'react';
import Band from '../Band/Band';
import Cart from '../Cart/Cart';
import "./MainContent.css";

const MainContent = () => {
    // Use State for Change Data
    const [bands, setBands] = useState([]);
    const [cart, setCart] = useState([]);

    // Use Effect for Data Load
    useEffect(() => {
        // Fetch Data
        fetch("./bands.JSON")
            .then(response => response.json())
            .then(data => setBands(data))
    }, []);

    // Button Handle for Invite Now
    const inviteNowButton = band => {
        const newCart = [...cart, band];
        setCart(newCart);

    }

    return (
        <div className="main-content-container">

            {/* Bands Container */}
            <div className="bands-container">
                {
                    bands.map(band => <Band
                        key={band.key}
                        band={band}
                        inviteNowButton={inviteNowButton}
                    ></Band>)
                }
            </div>

            {/* Cart Container */}
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default MainContent;