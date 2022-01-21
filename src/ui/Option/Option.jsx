import styles from './option.module.scss';

const Option = ({ children, value, ...props }) => {
    return (
        <label className={`d-flex align-items-center position-relative gap-3 ${styles.root}`}>
            <input type='radio' value={value} className={styles.input} {...props} />
            <span className={`flex-1 ${styles.label}`}>{children}</span>
        </label>
    )
}

export default Option;