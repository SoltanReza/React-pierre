import React from "react";
import "./styles.scss";
import Animate from "../../ui/Animate/Animate";
export default function DataSection(props) {
  return (
    <Animate type="bottom" className="data-section">
      <div className="img-container">
        <img
          src="data-image.jpg"
          alt="data section image"
          className="data-section-image"
        />
        <h2>{props.title}</h2>
        <p className="description">{props.description}</p>
      </div>
      <div className="data-section-header"></div>
      <div className="data-section-content">{props.children}</div>
    </Animate>
  );
}

