import styles from './Chip.module.scss';

const Chip = ({label, className, type='checkbox', ...props}) => (
    <label className={`${styles.root} d-inline-block ${className}`}>
        <input type={type} className='d-none' {...props} />
        <span className='py-2 px-3 d-flex'>{label}</span>
    </label>
)

export default Chip;