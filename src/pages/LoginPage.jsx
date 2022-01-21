import { Link } from "react-router-dom";
import BoxField from "../ui/BoxField/BoxField";
import TextField from "../ui/TextField";
import HeaderV2 from '../components/HeaderV2/HeaderV2';
import { AccountBox } from './LoginV2/accountBox'; 

import styled from "styled-components";
const LoginPage = () => {

    const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
    return (
<div className="d-flex min-vh-100 nav-padding bg-sm-light tx-dark">
           <HeaderV2 />

<div className="container  bg-light m-md-auto d-flex flex-column"style={{ maxWidth: '60%', height: '100%' }}>
      <AppContainer>
        <AccountBox />
      </AppContainer>
</div>
    

      </div>
        // <div className="d-flex min-vh-100 nav-padding bg-sm-light tx-dark">
        //     <HeaderV2 />
        //     <form className="container mt-lg-5 mt-4 py-lg-5 p-md-4 bg-light m-md-auto d-flex flex-column gap-md-5 gap-4" style={{ maxWidth: '30rem' }}>
        //         <h2 className="text-center h2 mt-0 mb-4 mb-md-5">Espace personnel</h2>
        //         <TextField label='Email' name='email' type='email' />
        //         <TextField className='my-md-1' label='Mot de passe' name='password' type='password' />
        //         <BoxField label='Se souvenir de moi ( remember me )' />
        //         <div className="d-flex gap-md-4 gap-3 align-items-center">
        //             <button className="btn-form mt-md-1">CONNEXION</button>
        //             <span>
        //                 Don't have an account yet, <Link to='/register' className="btn-text">Register</Link>
        //             </span>
        //         </div>
        //     </form>
        // </div>
    )
}

export default LoginPage;