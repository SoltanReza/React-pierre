import React from "react";
import "./styles.scss";

export default function DataSection(props) {
  return (
    <div className="data-section">
      <img
        src="data-image.jpg"
        alt="data section image"
        className="data-section-image"
      />
      <div className="data-section-header">
        <h2>{props.title}</h2>
        <p className="description">{props.description}</p>
      </div>
      <div className="data-section-content">{props.children}</div>
    </div>
  );
}

