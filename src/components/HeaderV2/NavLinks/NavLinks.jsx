import { NavLink } from 'react-router-dom';
import styles from './NavLinks.module.scss';

const NavLinks = ({ isMenuOpen }) => (
    <div className={`
        bg-light z-index-4 flex-1 d-flex flex-column flex-1 top-0 tx-dark overflow-hidden 
        ${styles.root} ${isMenuOpen ? styles.active : ''}
    `}>
        <div className={`${styles.menu} px-lg-5 d-flex flex-column flex-1`}>
            <div className='container mt-5 mt-md-0 d-lg-grid col-3 px-lg-5 flex-1'>
                <div className={styles.links}>
                    <h2 className='h2'>Auth</h2>
                    <ul>
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='/login'>Login</NavLink></li>
                        <li><NavLink to='/register'>Register</NavLink></li>
                    </ul>
                </div>
                <div className={styles.links}>
                    <h2 className='h2'>Properties</h2>
                    <ul>
                        <li><NavLink to='/properties'>Properties</NavLink></li>
                        <li><NavLink to='/properties'>Link 1</NavLink></li>
                        <li><NavLink to='/Link'>Link 2</NavLink></li>
                        <li><NavLink to='/Link'>Link 3</NavLink></li>
                        <li><NavLink to='/Link'>Link 4</NavLink></li>
                    </ul>
                </div>
                <div className={styles.links}>
                    <h2 className='h2'>Properties</h2>
                    <ul>
                        <li><NavLink to='/properties'>Properties</NavLink></li>
                        <li><NavLink to='/properties'>Link 1</NavLink></li>
                        <li><NavLink to='/Link'>Link 2</NavLink></li>
                        <li><NavLink to='/Link'>Link 3</NavLink></li>
                        <li><NavLink to='/Link'>Link 4</NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
)


export default NavLinks;