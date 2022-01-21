// import { useEffect } from "react";
import { createPortal } from "react-dom";
import styles from './portal.module.scss';

const Portal = ({ children, ...props }) => {
    // useEffect(() => {
    //     const className = document.body.className;
    //     document.body.className = 'overflow-hidden';
    //     return () => document.body.className = className;
    // }, [])
    return createPortal(<><div className={`position-fixed start-0 w-100 top-0 end-0 bottom-0 ${styles.modal}`} {...props}></div>{children}</>, document.getElementById('modal'))
}

export default Portal;