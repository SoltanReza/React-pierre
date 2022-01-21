import HomeItem from '../../HomeItem/HomeItem';
import styles from './PropertiesSection.module.scss';
import img1 from '../../../assets/1.jpeg'
import img2 from '../../../assets/2.jpeg'
import img3 from '../../../assets/3.jpeg'
import Carousel from '../../../ui/Carousel/Carousel';
import { Link } from 'react-router-dom';
import Animate from '../../../ui/Animate/Animate';
import {  SwiperSlide } from 'swiper/react/swiper-react';
import 'swiper/swiper.scss';
const PropertiesSection = () => (
    <div className='py-md-5'>
        <div className='my-5 py-5'>
            <div className='container tx-primary'>
                <Animate type='top' className={styles.main}>
                    <small className='small'>NOS BIENS</small>
                    <h2 className='h2 my-3'>ACHAT. VENTE ET LA GESTION DE BIENS IMMOBILERS DE QUALITE</h2>
                    <small className='small '>Nam dapibus nisl vitea elit fringilla rutrum. Aenean sollicitudin, erat a elementum rutrum, neque sem pretium metus, quis mollis nisl nunc et massa. Vestibulum sed metus in.</small>
                </Animate>
            </div>
            <Carousel  >
                <SwiperSlide ><HomeItem url={img1} title='agence eyon' description='Donec facilisis tortor ut augue lacinia, at viverra east semper.' /></SwiperSlide>
                <SwiperSlide ><HomeItem delay={0.25} url={img2} title='agence eyon' description='Donec facilisis tortor ut augue lacinia, at viverra east semper.' /></SwiperSlide>
                <SwiperSlide ><HomeItem delay={0.5} url={img3} title='agence eyon' description='Donec facilisis tortor ut augue lacinia, at viverra east semper.' /></SwiperSlide>
                <SwiperSlide ><HomeItem delay={0.75} url={img1} title='agence eyon' description='Donec facilisis tortor ut augue lacinia, at viverra east semper.' /></SwiperSlide>
                <SwiperSlide ><HomeItem delay={1} url={img2} title='agence eyon' description='Donec facilisis tortor ut augue lacinia, at viverra east semper.' /></SwiperSlide>
                <SwiperSlide ><HomeItem delay={1.25} url={img3} title='agence eyon' description='Donec facilisis tortor ut augue lacinia, at viverra east semper.' /></SwiperSlide>
                <SwiperSlide ><HomeItem delay={1.5} url={img1} title='agence eyon' description='Donec facilisis tortor ut augue lacinia, at viverra east semper.' /></SwiperSlide>
                <SwiperSlide ><HomeItem delay={1.75} url={img2} title='agence eyon' description='Donec facilisis tortor ut augue lacinia, at viverra east semper.' /></SwiperSlide>
                <SwiperSlide ><HomeItem delay={2} url={img3} title='agence eyon' description='Donec facilisis tortor ut augue lacinia, at viverra east semper.' /></SwiperSlide>
                <SwiperSlide ><HomeItem delay={2.25} url={img1} title='agence eyon' description='Donec facilisis tortor ut augue lacinia, at viverra east semper.' /></SwiperSlide>
                <SwiperSlide ><HomeItem delay={2.5} url={img2} title='agence eyon' description='Donec facilisis tortor ut augue lacinia, at viverra east semper.' /></SwiperSlide>
                <SwiperSlide ><HomeItem delay={3} url={img3} title='agence eyon' description='Donec facilisis tortor ut augue lacinia, at viverra east semper.' /></SwiperSlide>
            </Carousel>
            <div className='container'>
            <Link to='/moredetails' className='btn-text ps-3'> <i className="fas fa-angle-right border-rounded"></i> en swoir plus</Link>
            </div>
        </div>
    </div>
)

export default PropertiesSection;