import { Link } from "react-router-dom";
import BoxField from "../ui/BoxField/BoxField";
import TextField from "../ui/TextField";
import HeaderV2 from '../components/HeaderV2/HeaderV2';
import { AccountBox } from "./LoginV2/accountBox";
import styled from "styled-components";
import { useState } from "react";

const LoginPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const AppContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `;
  return (
    <>
      <HeaderV2
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        isDarken={false}
      />
      <div className="d-flex min-vh-100 nav-padding bg-sm-light tx-dark">
        <div
          className="container  bg-light m-md-auto d-flex flex-column"
          style={{ maxWidth: "60%", height: "100%" }}
        >
          <AppContainer>
            <AccountBox />
          </AppContainer>
        </div>
      </div>
    </>
  );
};

export default LoginPage;