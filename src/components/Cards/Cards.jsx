import React from "react";
import "./styles.scss";

function CardItem() {
  return (
    <div className="card">
      <h2>
        Test Header <br /> <span>Exampleee</span>
      </h2>
      <ul>
        <li>
          <span>Telephone</span>: test value text
        </li>
        <li>
          <span>key2</span>: test value text
        </li>
        <li>
          <span>key3</span>: test value text
        </li>
        <li>
          <span>key4</span>: test value text
        </li>
        <li>
          <span>key5</span>: test value text
        </li>
        <li>
          <span>key6</span>: test value text
        </li>
      </ul>
    </div>
  );
}

export default function Cards() {
  return (
    <div>
      <div className="cards-container">
        <CardItem />
        <CardItem />
        <CardItem />
      </div>
    </div>
  );
}
