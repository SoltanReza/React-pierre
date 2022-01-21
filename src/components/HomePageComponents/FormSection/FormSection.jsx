import Option from "../../../ui/Option/Option";
import Select from "../../../ui/Select/Select";
import TextField from "../../../ui/TextField";
import Animate from "../../../ui/Animate/Animate";

const FormSection = props => {
    return (
        <Animate Tag="form" className='container form-card text-uppercase'>
            <div>
                <TextField label='OU?' isNormal={true} name='or' />
            </div>
            <div className='form-line'></div>
            <div>
                <TextField label='PRIX MAX.' name='budget' isNormal={true} endEndorament='€' />
            </div>
            <div className='form-line'></div>
            <div>
                <Select label='NBR. DE PIECES' isNormal={true} name='rooms'>
                    <Option value='ASS'>ASS</Option>
                    <Option value='BSS'>BSS</Option>
                </Select>
            </div>
            <button className='btn-primary'>
                <span className="d-inherit gap-inherit px-5 mx-xl-5"><i className="fas fa-angle-right"></i>Recherchez</span>
            </button>
        </Animate>
    )
}

export default FormSection;