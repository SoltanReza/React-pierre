import styles from './HeroItem.module.scss';

const HeroItem = ({ url, title, subtitle, country }) => {
    return (
        <div className={`${styles.root} nav-padding pb-5 d-flex flex-column`}>
            <img alt='' src={url} className={styles.img} />
            <div className='d-flex position-relative z-index-1 flex-column flex-1 text-center container'>
                <div className='my-auto pt-hero '>
                <h1 className='h1'>{title}</h1>
                <h2 className='h2'>{subtitle}</h2>
                </div>
                <h3 className='h3'>{country}</h3>
            </div>
        </div>
    )
}

export default HeroItem;