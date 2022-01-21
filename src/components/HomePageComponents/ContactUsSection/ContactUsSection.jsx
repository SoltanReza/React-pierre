import { Link } from 'react-router-dom';
import Animate from '../../../ui/Animate/Animate';
import styles from './ContactUsSection.module.scss';

const ContactUsSection = () => {
    return (
        <div className={`container mb-5 pb-5 d-flex align-items-center ${styles.root}`}>
            <Animate type='left' className={`${styles.img} z-index-1 d-none d-lg-block`}></Animate>
            <Animate delay={0.35} type='right' className={`${styles.main} tx-light bg-primary py-5 flex-1`}>
                <div className='pe-xl-5 py-md-5'>
                    <div className='px-md-5 py-lg-5 p-3 my-lg-5 me-lg-5'>
                        <small>PRISE DE RENDEZ NOUS</small>
                        <h2 className='h2 my-3'>UN BESION D'INFORMATION?<br />PRENEZ RENDEZ-VOUS</h2>
                        <p className={`${styles.blog} mb-5 pb-md-5 small`}>
                            Nam porttitor blandit accumsan. Ut vel dictum sem, a pretium dui. In malesuada enim in door euismod, id commodo mi consecture. Curabitur at ves.
                        </p>
                        <Link to='/' className='btn-primary d-flex d-sm-inline-flex px-5 bg-light tx-primary h6'>
                            <i className="fas fa-angle-right me-2"></i>
                            <span className='ms-2'>CONTACTEZ NOUS</span>
                        </Link>
                    </div>
                </div>
            </Animate>
        </div>
    )
}

export default ContactUsSection;