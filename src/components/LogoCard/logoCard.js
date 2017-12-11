import React from "react";
import "./logoCard.css";

const LogoCard = props => (
  <div className="card">
    <div className="img-container click-item">
      <img alt={props.name} src={props.image} />
    </div>
    <div className="content">
      <ul>
        <li>
          <strong>Name:</strong> {props.name}
        </li>
      </ul>
    </div>
  </div>
);

export default LogoCard;
