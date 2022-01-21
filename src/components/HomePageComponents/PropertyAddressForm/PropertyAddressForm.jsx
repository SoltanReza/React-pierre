import Animate from "../../../ui/Animate/Animate";
import TextField from "../../../ui/TextField";

const PropertyAddressSection = () => {
    return (
        <div className='container-v2'>
            <div className='text-center tx-primary'>
                <Animate type="bottom">ESTMEZNOTRE BIEN</Animate>
                <Animate type='bottom' delay={0.4} className='h2 mt-3 mb-5 pb-md-5'>UN BIEN A VENDRE?<br />ESTIMEZ LE RAPIDEMENT</Animate>
            </div>
            <Animate type="bottom" delay={0.8} className='form-card'>
                <div>
                    <TextField label='adresse du bien?' className='text-uppercase' isNormal={true} name='or' />
                </div>
                <button className='btn-primary'>
                    <span className="d-inherit gap-inherit px-xl-4"><i className="fas fa-angle-right"></i>Recherchez</span>
                </button>
            </Animate>
        </div>
    )
}

export default PropertyAddressSection;