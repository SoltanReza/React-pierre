import { Link } from 'react-router-dom';
import Animate from '../../../ui/Animate/Animate';

const AboutUsSection = () => {
    return (
        <Animate className='container-v2 text-center py-md-5 mt-2'>
            <div className='my-5 py-5'>
                <h6 className='h6 m-0 tx-primary text-uppercase'>qu sommes nous</h6>
                <h2 className='h2 text-uppercase mt-3 mb-4 tx-primary'>Achat. vente et la gestion <br className='d-md-block d-none' /> de beins immobiliers de qualite</h2>
                <small className=' m-0 small d-block mb-5 pb-md-1'>Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget libero posuere vulputate. Etiam elit elit, elementum sed varius at, adipiscing vitae est. Sed nec felis pellentesque, lacinia dui sed, ultricies sapien. Pellentesque orci lectus, consectetur vel posuere posuere, rutrum eu ipsum. Aliquam eget odio sed ligula iaculis consequat at eget orci. Mauris molestie sit amet metus mattis varius. Donec sit amet ligula eget nisi sodales egestas. Aliquam.</small>
                <Link to='/' className='btn-text ps-3'> <i className="fas fa-angle-right border-rounded"></i> en swoir plus</Link>
            </div>
        </Animate>
    )
}

export default AboutUsSection;