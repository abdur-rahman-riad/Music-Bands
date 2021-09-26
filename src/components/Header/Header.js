import React from 'react';
import foundationLogo from "../../images/diu-logo.png";
import liveConcertLogo from "../../images/live-bands.png";
import "./Header.css";

const Header = () => {
    return (
        <div>
            <div className="header-section">
                {/* Foundation Day Logo */}
                <div className="foundation-logo">
                    <img src={foundationLogo} alt="DIU Foundation Day Logo(2020)" />
                </div>
                {/* Header Information */}
                <div className="header-info">
                    <h1>Celebrate DIU Foundation Day</h1>
                    <h3>Invite your favorite Bangladeshi music band for enjoying the day</h3>
                    <h2>Budget 50 Lakhs Taka</h2>
                </div>
                {/* Live Concert Logo */}
                <div className="concert-logo">
                    <img src={liveConcertLogo} alt="Live Concert Banner" />
                </div>
            </div>
        </div>
    );
};

export default Header;