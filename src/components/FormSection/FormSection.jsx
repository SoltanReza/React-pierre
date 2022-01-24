import React from "react";
import TextField from "../../ui/TextField";
import BoxField from "../../ui/BoxField/BoxField";

import "./styles.scss";
import { Link } from "react-router-dom";
export default function FormSection() {
  return (
    <form className="form-section">
      <h2 className="text-center h2 my-0">FormSection</h2>
      <div>
        <h5 className="mt-0 mb-2 h5">Options</h5>
        <div className="d-flex gap-3 mb-3">
          <BoxField
            label="option1"
            value="option1"
            type="radio"
            name="options"
          />
          <BoxField
            label="option2"
            value="option2"
            type="radio"
            name="options"
          />
          <BoxField
            label="option3"
            value="option3"
            type="radio"
            name="options"
          />
        </div>
      </div>
      <div className="d-grid col-md-2 gap-5">
        <TextField label="Nom" />
        <TextField label="Prenom" />

        <TextField label="Numéro de telephone" />
        <TextField label="Email" />

        <TextField label="Mot de passe" />
        <TextField label="Mot de passe - confirmation" />
      </div>
      {/* <BoxField
        label={
          <>
            {" "}
            J’accepte que Cabinet Bonaparte m’envoie par e-mail ses <br />{" "}
            actualités et ses offres concernant ses autres services
          </>
        }
      /> */}
      <div className="d-flex gap-md-4 gap-3 align-items-center">
        <button className="btn-form">Sumbit</button>
      </div>
    </form>
  );
}
