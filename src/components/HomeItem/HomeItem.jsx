import Animate from '../../ui/Animate/Animate';
import styles from './HomeItem.module.scss';

const HomeItem = ({ url, title, date, description, pdf, onclick, ...props }) => (
    <Animate {...props} type='bottom' className='overflow-hidden'>
        <div onClick={onclick}>
        <div className={`${styles.img} bg-img`} style={{ backgroundImage: `url(${url})` }}></div>
        <div className='mt-4'>
            {date && <p className=' text-uppercase my-2'>{date}</p>}
            <p className='tx-primary my-2 text-uppercase'>{title}</p>
            <small className=' d-block ms-5 ps-md-5'>{description}</small>
        </div>
        </div>
    </Animate>
)

export default HomeItem;