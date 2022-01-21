import { useEffect, useState } from 'react';
import './HeaderV2.scss';
import Nav from './Nav/Nav';
import NavLinks from './NavLinks/NavLinks';

const HeaderV2 = ({ className, transparent }) => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';

    useEffect(() => {
        return () => document.body.style.overflow = '';
    }, [])
    

    return (
        <header className={`
                ${className}
                d-flex flex-column h-100 tx-dark
                start-0 w-100 top-0 z-index-4 position-fixed HeaderV2
                ${isMenuOpen ? `active bg-light tx-dark` : ''}`}
        >
            <Nav transparent={transparent} isMenuOpen={isMenuOpen} toggleMenu={() => setIsMenuOpen(!isMenuOpen)} />
            <NavLinks isMenuOpen={isMenuOpen} />
        </header>
    )
}

export default HeaderV2;