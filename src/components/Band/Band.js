import React from 'react';
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
                <p>They will sing {song} songs</p>
                <p>Genres: {genres}</p>
                <h3>Cost: {cost} tk</h3>
            </div>
            <div className="band-invite">
                <button>Invite Now</button>
            </div>
        </div>
    );
};

export default Band;