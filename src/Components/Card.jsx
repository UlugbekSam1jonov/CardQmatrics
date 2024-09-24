import React from "react";
import "./Card.css";

const Card = ({ title, description, imageSrc }) => {
    return (
        <div className="card">
            <img src={imageSrc} className="card-image" />
            <div className="card-content">
                <h3 className="card-title">{title}</h3>
                <p className="card-description">{description}</p>
            </div>
        </div>
    );
};

export default Card;
