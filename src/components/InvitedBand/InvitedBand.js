import React from 'react';
import "./InvitedBand.css";

const InvitedBand = (props) => {
    const { bandName, image } = props.band;
    return (
        <div className="invited-band">
            <img src={image} alt="Invited Band Banner" />
            <h3>{bandName}</h3>
        </div>
    );
};

export default InvitedBand;