import React from 'react';
import { FaEnvelopeOpenText } from "react-icons/fa";
import "./Band.css";

const Band = (props) => {
    // Distructuring
    const { bandName, leadVocal, song, image, genres, cost } = props.band;
    return (
        <div className="single-band">
            <div className="band-title">
                <img src={image} alt="Band Banner" />
                <h2>{bandName}</h2>
            </div>
            <div className="band-detalis">
                <h4>Vocal: {leadVocal}</h4>
                <p><span>Quantity:</span> They will sing <span>{song}</span> songs</p>
                <p><span>Genres:</span> {genres}</p>
                <h3>Cost: {cost} tk</h3>
            </div>
            <div className="band-invite">
                <button onClick={() => props.inviteNowButton(props.band)}> <FaEnvelopeOpenText /> Invite Now</button>
            </div>
        </div>
    );
};

export default Band;