import { Link } from 'react-router-dom';
import Animate from '../../../ui/Animate/Animate';
import "./ContactUsSection.scss";

const ContactUsSection = () => {
  return (
    <div
      id="contact-us"
      className={` container mb-5 pb-5 d-flex align-items-center justify-content-center`}
    >
      <Animate type="left" className={`img z-index-1 `}></Animate>
      <Animate
        delay={0.35}
        type="right"
        className={`main tx-light bg-primary py-5 `}
      >
        <div className="pe-xl-5 py-md-5">
          <div className="px-md-5 py-lg-5 p-3 my-lg-5 me-lg-5">
            <small>PRISE DE RENDEZ NOUS</small>
            <h2 className="h2 my-3">
              UN BESION D'INFORMATION?
              <br />
              PRENEZ RENDEZ-VOUS
            </h2>
            <p className={` mb-5 pb-md-5 small`}>
              Nam porttitor blandit accumsan. Ut vel dictum sem, a pretium dui.
              In malesuada enim in door euismod, id commodo mi consecture.
              Curabitur at ves.
            </p>
            <Link
              to="/"
              className="btn-primary d-flex d-sm-inline-flex px-5 bg-light tx-primary h6"
            >
              <i className="fas fa-angle-right me-2"></i>
              <span className="ms-2">CONTACTEZ NOUS</span>
            </Link>
          </div>
        </div>
      </Animate>
    </div>
  );
};

export default ContactUsSection;