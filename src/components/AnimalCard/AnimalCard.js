import React from "react";
import "./AnimalCard.css";

const AnimalCard = props => (
    <div className="card" onClick={props.imageClick}>
        <div className="img-container center">
        <img alt={props.image.replace(".jpg", "")} src={require("../images/" + props.image)} />
        </div>
    </div>
);

export default AnimalCard;