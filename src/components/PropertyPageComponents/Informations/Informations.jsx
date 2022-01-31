import React from "react";
import { Wrapper } from "../../../ui/Wrapper/Wrapper";
import "./styles.scss";

export default function Informations() {
  return (
    <>
      <div className="informations">
        <div className="informations-title">
          <i class="fas fa-quote-left"></i>
          <h2>Titre de page</h2>
          <a href="#">| Voir plus d'informations</a>
        </div>
        <div className="informations-descriptions">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit,
          deleniti? Aliquid repellat qui et, reprehenderit debitis architecto,
          vitae corporis est, quas libero perspiciatis quo! Dicta quam voluptate
          sunt blanditiis odit.
          <div className="informations-descriptions-table">
            <div className="item">
              <span className="key">TYPE DE BIEN</span>
              <span className="value">Appartement</span>
            </div>
            <div className="item">
              <span className="key">TYPE DE BIEN</span>
              <span className="value">Appartement</span>
            </div>
            <div className="item">
              <span className="key">TYPE DE BIEN</span>
              <span className="value">Appartement</span>
            </div>
          </div>
        </div>
      </div>
      <Wrapper>
        <hr className="px-sm-5 mx-5" />
      </Wrapper>
    </>
  );
}
