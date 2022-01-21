import HomeItem from "../../HomeItem/HomeItem";
import img1 from '../../../assets/1.jpeg'
import img2 from '../../../assets/2.jpeg'
import img3 from '../../../assets/3.jpeg'
import Animate from "../../../ui/Animate/Animate";
// import Modal from "../../modal"

import Modal from "react-modal";
import axios from "axios";
import { Component } from "react";
import AllPagesPDFViewer from '../../PDF/pdfPages'
import NewsItem from "./NewsItem";

class NewsSection extends Component {
    
    openModal = () => {
        console.log("opening modal");
        this.setState({showModal: !this.state.showModal })
    }
    constructor() {
        super();
        this.state = {
            news: [],
            showModal: false,
            urlPdf: null,
            isPdfLoaded: null,
            percentLoaded: null
        }
    }

     customStyles = {
          overlay: {zIndex: 1000},
    };

    getCourses = async () => {
        let data = await axios.get('https://www.zapouh.fr/api/news').then(( { data }) => data );
        data.map(nouv => { console.log('Row: ', nouv)})
        this.setState({ news: data, showModal: false })
    }
    componentDidMount() {
      this.getCourses();
    }
    test = (link) => {
       this.setState({isPdfLoaded: false});
       this.openModal();
       axios({
        url: 'https://www.zapouh.fr/api/data/' + link, //your url
        method: 'GET',
        responseType: 'blob', 
        onDownloadProgress: progressEvent => {
            const percentage = Math.round(
                (progressEvent.loaded * 100) / progressEvent.total
              );

              if (percentage % 10 === 0) {
                this.setState({ percentLoaded: percentage})
              }
        }
      }).then((response) => {
       const file = new Blob([response.data], {type: 'application/pdf'});
       const fileURL = URL.createObjectURL(file);
       console.log("Got pdf");
       
       this.setState({isPdfLoaded: true});
        this.setState({urlPdf: fileURL});
        //  this.openModal();
      });
    }
    renderNews(){
        console.log("rendering news");
        return this.state.news.map(nouv => {


            return(
                <NewsItem
                        key={nouv}
                        urlImg={"https://www.zapouh.fr/api/data/" + nouv.image}
                        date={nouv.date}
                        title={nouv.title}
                        description={nouv.description}
                        pdf={nouv.pdf}
                        onclick={this.test}
                />
            )
        })
      }
      
      renderPDF() {
         return this.state.isPdfLoaded ? (
            <AllPagesPDFViewer pdf={this.state.urlPdf} />
        ) : ( <p> downloading : {this.state.percentLoaded} </p> )
      }

    render() {
        return (
            <>
            <Modal isOpen={this.state.showModal} onRequestClose={() => this.setState({showModal: false})} appElement={document.getElementById('root') || undefined}  style={this.customStyles} > 
                 {this.renderPDF()}      
            </Modal>
        
            <div className='container py-md-5'>
            <div className='my-5 py-5'>
                <Animate type="bottom" className='m-0 text-uppercase tx-primary small'>Actualités</Animate>
                <div className='d-grid col-xxl-4 gap-lg-4 gap-3 mt-md-5 mt-4 pt-lg-1 col-lg-3 col-sm-2 justify-content-center'>
                    {this.renderNews()}
                    {/* <Modal showModal={this.state.showModal} setShowModal={this.openModal}></Modal> */}
                </div>
            </div>
        </div>
            </>
        )
    }
}

export default NewsSection;