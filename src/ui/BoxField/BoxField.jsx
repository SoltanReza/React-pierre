import './BoxField.scss';

const BoxField = ({label, className, type='checkbox', ...props}) => (
    <label className={`box-field-root ${className}`}>
        <input type={type} className='d-none' {...props} />
        <span className='boxfield-box ms-2 d-inline-block position-relative'></span>
        <span>{label}</span>
    </label>
)

export default BoxField;