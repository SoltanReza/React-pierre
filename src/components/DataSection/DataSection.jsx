import React from "react";



export default function DataSection(props) {
  return (
    <div className="data-section">
      <div className="data-section-header">
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </div>
      <div className="data-section-content">
        {props.children}
      </div>
    </div>
  );
}