import Animate from '../../../ui/Animate/Animate';
import styles from './SliderItem.module.scss';

const SliderItem = ({ url, title, address, city, onNext, onPrevious }) => {
    return (
        <div className={`${styles.root} bg-img`} style={{ backgroundImage: `url(${url})` }}>
            <Animate className='d-flex' type='backdrop'>
                <div className={`container tx-primary d-flex align-items-center ${styles.main} justify-content-lg-end`}>
                    <Animate delay={0.5} type='left' className={`card text-center w-100 mb-md-0 my-5 ${styles.card}`}>
                        <small className='small'>NOS AGENCES</small>
                        <h5 className='h5 text-uppercase my-3 pb-1'>{title}</h5>
                        <small className='m-0  small'>{address}<br />{city}</small>

                        <div className='my-5 pb-3'>
                            <p className='mb-1 mt-0'>+33 4 92 29 10 39</p>
                            <a className='text-uppercase d-block' href='mailto:contact@agency-lyon.com'>contact@agency-lyon.com</a>
                        </div>

                        <div className='d-flex justify-content-center'>
                            <button className='btn-icon h6 prev-btn' onClick={onPrevious}>
                                <i className="fas fa-angle-left border-rounded"></i>
                            </button>
                            <button className='btn-icon h6 next-btn' onClick={onNext}>
                                <i className="fas fa-angle-right border-rounded"></i>
                            </button>
                        </div>
                    </Animate>
                </div>
            </Animate>
        </div>
    )
}

export default SliderItem;