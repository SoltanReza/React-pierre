import Animate from '../../../ui/Animate/Animate';
import styles from './NewsItem.module.scss';

import { Component } from "react";

class NewsItem extends Component {
 constructor(props) {
     super(props);
     console.log("Props : ",props)
    //  this.setState({
    //      img : this.props.urlImg,
    //      backgroundImg: null,
    //      title: this.props.title,
    //      date: this.props.date,
    //      description: this.props.description,
    //      pdf: this.props.pdf,
    //      onclick: this.props.onclick
    //  })
    }  

    
    
    render() {
        return (
            <Animate type='bottom' className='overflow-hidden'>
            <div onClick={ () => {
                this.props.onclick(this.props.pdf)
            }}>
            <div className={`${styles.img} bg-img`} style={{ backgroundImage: `url(${this.props.urlImg})` }}></div>
            <div className='mt-4'>
                {this.props.date && <p className=' text-uppercase my-2'>{this.props.date}</p>}
                <p className='tx-primary my-2 text-uppercase'>{this.props.title}</p>
                <small className=' d-block ms-5 ps-md-5'>{this.props.description}</small>
            </div>
            </div>
        </Animate> 
        )
    }
}

// const NewsItem = ({ url, title, date, description, pdf, onclick, ...props }) => (
//     <Animate {...props} type='bottom' className='overflow-hidden'>
//         <div onClick={onclick}>
//         <div className={`${styles.img} bg-img`} style={{ backgroundImage: `url(${url})` }}></div>
//         <div className='mt-4'>
//             {date && <p className=' text-uppercase my-2'>{date}</p>}
//             <p className='tx-primary my-2 text-uppercase'>{title}</p>
//             <small className=' d-block ms-5 ps-md-5'>{description}</small>
//         </div>
//         </div>
//     </Animate>
// )

export default NewsItem;