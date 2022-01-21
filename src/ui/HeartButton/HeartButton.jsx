import styles from './HeartButton.module.scss';

const HeartButton = ({className, ...props}) => (
    <label className={`btn-icon ${className} ${styles.root}`}>
        <input type='checkbox' {...props} className='d-none' />
        <i className='fas fa-heart tx-danger'></i>
        <i className='far fa-heart'></i>
    </label>
)

export default HeartButton;