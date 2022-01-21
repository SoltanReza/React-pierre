import img1 from '../../../assets/1.jpeg';
import TextArea from '../../../ui/TextArea';
import TextField from '../../../ui/TextField';
import styles from './ProfileSection.module.scss';

const ProfileSection = () => {
    return (
        <div className="px-md-5 pt-5 d-flex flex-column flex-lg-row justify-content-between mx-lg-5">
            <div className='text-center'>
                <h4 className="h4 m-0">Bien présenté par :</h4>
                <img alt="" src={img1} className={`${styles.img} mt-5 mb-3`} />
                <h5 className='h5 mt-0 mb-2'>Loic Olivier</h5>
                <h5 className='h5 m-0'>06 16 15 34 30</h5>
            </div>
            <div className='text-lg-center'>
                <h4 className='h4 mt-lg-0 mt-5 mb-4 mb-lg-5'>Contactez nous</h4>
                <form className='d-grid gap-lg-5 gap-md-4 gap-3 p-lg-5 p-md-4 p-3 elevation-1 bg-light'>
                    <div className='d-grid col-sm-2 gap-inherit'>
                        <TextField label='Nom' name='name' />
                        <TextField label='Prenom' name='Prenom' />
                    </div>
                    <div className='d-grid col-sm-2 gap-inherit'>
                        <TextField label='Email' name='email' />
                        <TextField label='Téléphone' name='phone' />
                    </div>
                    <TextArea label='Votre message ...' rows={7}></TextArea>
                </form>
            </div>
        </div>
    )
}

export default ProfileSection;