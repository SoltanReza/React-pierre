import { Link } from "react-router-dom";
import HeaderV2 from "../components/HeaderV2/HeaderV2";
import BoxField from "../ui/BoxField/BoxField";
import TextField from "../ui/TextField";
import background from "../assets/3.jpeg";

const RegisterPage = () => {

    var style = {
        maxWidth: '40rem',
        backgroundColor: 'rgb(255, 255, 255, 0.9)'
    }
    return (
        <div style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover' }}>
        <div className="d-flex min-vh-100 nav-padding pb-5 mt-md-3 tx-dark bg-sm-light">
            <HeaderV2 />
            <form className="container p-lg-5 p-md-4 m-auto d-flex flex-column gap-md-5 gap-md-4 gap-3 " style={style}>
                <h2 className="text-center h2 my-0">Inscription</h2>
                <div>
                    <h5 className="mt-0 mb-2 h5">Civilité</h5>
                    <div className="d-flex gap-3">
                        <BoxField label='M.' value='Mr' type='radio' name='gender' />
                        <BoxField label='Mme.' value='Mrs' type='radio' name='gender' />
                        <BoxField label='Mlle.' value='Ms' type='radio' name='gender' />
                    </div>
                </div>
                <div className="d-grid col-md-2 gap-inherit">
                    <TextField label='Nom' />
                    <TextField label='Prenom' />
                </div>
                <TextField label='Numéro de telephone' />
                <TextField label='Email' />
                <div className="d-grid col-md-2 gap-inherit">
                    <TextField label='Mot de passe' />
                    <TextField label='Mot de passe - confirmation' />
                </div>
                <BoxField label={<>      J’accepte que Cabinet Bonaparte m’envoie par e-mail ses <br /> actualités et ses offres concernant ses autres services</>} />
                <div className="d-flex gap-md-4 gap-3 align-items-center">
                    <button className="btn-form">CONNEXION</button>
                    <span>Already have an account, <Link to='/login' className="btn-text">Login</Link></span>
                </div>
            </form>
        </div>
        </div>
    )
}

export default RegisterPage;