import './inputfield.scss';

const InputField = ({label, className, ...props}) => {
    return (
        <label className={`d-grid gap-2 ${className}`}>
            <input {...props} className='input-field' />
            {label && <span className="input-field-label">{label}</span>}
        </label>
    )
}

export default InputField;