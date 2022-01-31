import { Wrapper } from "../../../ui/Wrapper/Wrapper";

const MainSection = () => {
  return (
    <div>
      {/* <h3 className="h3 mt-5 pt-md-2 mb-3 d-flex justify-content-between">Appartement LYON 8 <span>1 350 000$</span></h3>
            <h5 className="mt-0 mb-5 pb-md-3 h5">Appartement 5 pièces</h5> */}
      <Wrapper>
        <hr className="px-sm-5 mx-5" />
      </Wrapper>
      <h3 className="h3 mt-3 mb-5 pb-md-5">Informations :</h3>
      <Wrapper>
        <div className="d-flex gap-md-4 gap-3 small justify-content-between mb-5 pb-md-5 mx-sm-5">
          <div className="d-grid gap-inherit">
            <div className="d-flex gap-2 align-items-center">
              <i className="fas fa-dolly-flatbed"></i>
              Chambres: 2
            </div>
            <div className="d-flex gap-2 align-items-center">
              <i className="fas fa-dolly-flatbed"></i>
              Chambres: 2
            </div>
            <div className="d-flex gap-2 align-items-center">
              <i className="fas fa-dolly-flatbed"></i>
              Chambres: 2
            </div>
          </div>
          <div className="d-grid gap-inherit">
            <div className="d-flex gap-2 align-items-center">
              <i className="fas fa-dolly-flatbed"></i>
              Chambres: 2
            </div>
            <div className="d-flex gap-2 align-items-center">
              <i className="fas fa-dolly-flatbed"></i>
              Chambres: 2
            </div>
            <div className="d-flex gap-2 align-items-center">
              <i className="fas fa-dolly-flatbed"></i>
              Chambres: 2
            </div>
          </div>
          <div className="d-grid gap-inherit">
            <div className="d-flex gap-2 align-items-center">
              <i className="fas fa-dolly-flatbed"></i>
              Chambres: 2
            </div>
            <div className="d-flex gap-2 align-items-center">
              <i className="fas fa-dolly-flatbed"></i>
              Chambres: 2
            </div>
            <div className="d-flex gap-2 align-items-center">
              <i className="fas fa-dolly-flatbed"></i>
              Chambres: 2
            </div>
          </div>
        </div>
        <hr className="px-sm-5 mx-5" />
      </Wrapper>
      <div className="mt-2 pb-3">
        <h3 className="h3 mt-3 mb-4">Descriptions:</h3>
        <h5 className="mt-0 h5">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum
        </h5>
      </div>
      <Wrapper>
        <hr className="px-sm-5 mx-5" />
      </Wrapper>
    </div>
  );
};

export default MainSection;
