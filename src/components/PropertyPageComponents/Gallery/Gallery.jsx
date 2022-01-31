import React from "react";
import { Wrapper } from "../../../ui/Wrapper/Wrapper";
import "./styles.scss";

export default function Gallery() {
  return (
    <>
      <Wrapper>
        <hr className="px-sm-5 mx-5" />
      </Wrapper>
      <div className="gallery-wrapper">
        <div className="images">
          <img className="gallery-image" src="/image1.jpeg" alt="" />
          <img className="gallery-image" src="/image2.jpeg" alt="" />
          <img className="gallery-image" src="/image3.jpeg" alt="" />
        </div>
        <div className="gallery-informations">
          <h3 className="title">Informations sur le bien</h3>
          <div className="gallery-table">
            <div className="item">
              <span className="key">Type de bien :</span>
              <span className="value">Appartement</span>
            </div>
            <div className="item">
              <span className="key">Type de bien :</span>
              <span className="value">Appartement</span>
            </div>
            <div className="item">
              <span className="key">Type de bien :</span>
              <span className="value">Appartement</span>
            </div>
          </div>
        </div>
        <div className="gallery-informations">
          <h3 className="title">Bilan consommation énergie</h3>
          <div className="gallery-table">
            <div className="item">
              <span className="key">Type de bien :</span>
              <span className="value">Appartement</span>
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. In nisi
            distinctio consequatur incidunt corrupti repellendus saepe delectus{" "}
          </p>
        </div>
        <div className="gallery-informations">
          <h3 className="title">Bilan émissions GES</h3>
          <div className="gallery-table">
            <div className="item">
              <span className="key">Type de bien :</span>
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
