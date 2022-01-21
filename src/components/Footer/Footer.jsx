const Footer = () => (
    <footer className='tx-light py-md-5 py-3 text-center container-p position-relative d-grid col-md-3 gap-2 small bg-dark'>
        <ul className='list-unstyled d-flex gap-4 justify-content-center justify-content-md-start'>
            <li>
                <a href='https://facebook.com/' className='fab fa-facebook-f' target='_blank'></a>
            </li>
            <li>
                <a href='https://instagram.com/' className='fab fa-instagram' target='_blank'></a>
            </li>
            <li>
                <a href='https://pinteres.com/' className='fab fa-pinterest-p' target='_blank'></a>
            </li>
            <li>
                <a href='https://linkedin.com/' className='fab fa-linkedin-in' target='_blank'></a>
            </li>
        </ul>
        <small>@2020 Maison Junoi Menious legals</small>
        <small className='text-md-start'>Creation de site: Adveris</small>
    </footer>
)

export default Footer;