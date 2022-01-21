import styles from './AuthLayout.module.scss';

const AuthLayout = (props) => {
    return (
        <div className={`${styles.root} h6 tx-dark container`}>
            {props.children}
        </div>
    )
}

export default AuthLayout;