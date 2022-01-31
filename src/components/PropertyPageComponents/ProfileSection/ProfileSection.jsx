import img1 from '../../../assets/1.jpeg';
import TextArea from '../../../ui/TextArea';
import TextField from '../../../ui/TextField';
import "./ProfileSection.scss";

const ProfileSection = () => {
  return (
    <div className=" pt-5 d-flex flex-column flex-lg-row justify-content-between ">
      <div className="text-center">
        <h4 className="h4 m-0">Bien présenté par :</h4>
        <img alt="" src={img1} className={`img mt-5 mb-3`} />
        <h5 className="h5 mt-0 mb-2">Loic Olivier</h5>
        <h5 className="h5 m-0">06 16 15 34 30</h5>
      </div>
      <div className="form-container text-lg-center">
        <div className="left-box">
          <h5>Contact Us</h5>
          <ul>
            <li>
              <i class="fas fa-map-marker-alt"></i>
              <span>Test address</span>
            </li>
            <li>
              <i class="fas fa-envelope"></i> <span> Test mail</span>
            </li>
            <li>
              <i class="fas fa-phone"></i> <span>Test phone</span>
            </li>
            <li>
              <i class="fas fa-print"></i> <span>Test fax</span>
            </li>
          </ul>
        </div>
        <form className="d-grid gap-lg-5 gap-md-4 gap-3 p-lg-5 p-md-4 p-3 elevation-1 bg-light">
          <div className="form-title">
            <h4>Contactez nous</h4>
            <span>Feel free to drop us a line below!</span>
          </div>
          <TextField label="Nom" name="name" />
          <TextField label="Email" name="email" />
          <TextField label="Téléphone" name="phone" />
          <TextArea label="Votre message ..." rows={7}></TextArea>
          <div>
            <button className="btn btn-form">Envoyer</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileSection;