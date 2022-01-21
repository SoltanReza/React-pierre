import styles from './HomeItemV2.module.scss';
import img1 from '../../assets/1.jpeg';
import HeartButton from '../../ui/HeartButton/HeartButton';
import { useNavigate } from 'react-router-dom';

const HomeItemV2 = ({ className }) => {
    const navigate = useNavigate();
    return (
        <div className={`${styles.root}  position-relative cursor-pointer ${className}`}>
            <div className={`${styles.imgWrapper} position-relative`}>
                <img alt='' className='position-absolute start-0 top-0 w-100 h-100' src={img1} onClick={() => navigate('/properties/1')} />
                <HeartButton className='position-absolute start-0 top-0 tx-light h5' />
            </div>
            <div onClick={() => navigate('/properties/1')}>
                <h6 className='text-uppercase smaller mt-1 mb-2'>LYON 3EME - LA PART-DIEU</h6>
                <div className='d-flex gap-4 smaller'>
                    <span>Appartment</span>
                    <span>114,99 m2</span>
                    <span>3 chambres</span>
                    <span className='me-auto'>1 300 000 $</span>
                </div>
            </div>
        </div>
    )
}

export default HomeItemV2;