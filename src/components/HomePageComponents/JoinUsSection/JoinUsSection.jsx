import Animate from '../../../ui/Animate/Animate';
import styles from './JoinUsSection.module.scss';

const JoinUsSection = () => {
    return (
        <Animate type='bottom' className={styles.root}>
            <div className='container mt-lg-5 pt-lg-5 d-lg-flex justify-content-end align-items-center'>
                <div className='mt-lg-5 pt-lg-5'>
                    <div className='py-5 '>
                        <div className='card'>
                            <div className='px-lg-2'>
                                <small className='tx-primary'>NOUS REJOINDRE</small>
                                <h5 className='h5 my-3 tx-primary'>VOUS SOUHAITEZ NOUS <br className='d-sm-block d-none' /> REJONDRE?</h5>
                                <p className='m-0 small '>Nam porttitor blandit accumsan. Ut vel dictum sem, <br className='d-sm-block d-none' /> a pretium dui. In malesuada enim.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Animate>
    )
}

export default JoinUsSection;