import { useState } from "react";
import styles from './Expandable.module.scss'

const Expandable = ({ title, children, className }) => {
    const [isOpen, setIsOpen] = useState('')
    return (
        <div className={className}>
            <button
                type='button'
                onClick={() => setIsOpen(!isOpen)}
                className={`btn-normal smaller p-0 w-100 justify-content-between ${styles.button}`} type="button">
                {title}
                <i className={`fas fa-chevron-down ${styles.icon} ${isOpen ? styles.active : ''}`}></i>
            </button>
            <div className={`${styles.wrapper} ${isOpen ? styles.active : ''}`}>
                {children}
            </div>
        </div>
    )
}

export default Expandable;