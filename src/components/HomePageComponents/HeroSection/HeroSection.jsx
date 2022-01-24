import HeroItem from './HeroItem';
import './HeroSection.scss';
import img1 from '../../../assets/1.jpeg'
import img2 from '../../../assets/2.jpeg'
import img3 from '../../../assets/3.jpeg'
import img4 from '../../../assets/4.jpeg'
import img5 from '../../../assets/5.jpeg'
const HeroSection = ({ toggleMenu }) => {
  return (
    <div className="vh-100 tx-light position-relative HomePage-HeroSection">
      {/* <div onMouseOver={() => toggleMenu(true)} className="hover-column"></div> */}
      <HeroItem
        url={img1}
        title="CABINET BONAPARTE"
        subtitle="L'immobilier haute couture"
        country="PARIS / LYON / MARSEILLE"
      />
      <HeroItem
        url={img2}
        title="CABINET BONAPARTE"
        subtitle="Oser voir grand"
        country="PARIS / LYON / MARSEILLE"
      />
      <HeroItem
        url={img3}
        title="CABINET BONAPARTE"
        subtitle="Construire les rêves"
        country="PARIS / LYON / MARSEILLE"
      />
      <HeroItem
        url={img4}
        title="CABINET BONAPARTE"
        subtitle="Investire dans l'intemporel"
        country="PARIS / LYON / MARSEILLE"
      />
      <HeroItem
        url={img5}
        title="CABINET BONAPARTE"
        subtitle="Sublimer avec caractère"
        country="PARIS / LYON / MARSEILLE"
      />
    </div>
  );
};

export default HeroSection;