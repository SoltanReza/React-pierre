import './withFormField.scss';

const withFormField = WrappedComponent => {
    const App = ({ label, placeholder = ' ', className, startEndorament, endEndorament, isNormal = false, children, ...props }) => {
        return (
            <label className={`FormField-Root h6 align-items-center d-flex ${isNormal ? 'FormField-Root-Normal' : ''} position-relative ${className}`}>
                <WrappedComponent {...props} className='FormField flex-1 p-0' placeholder={placeholder} />
                {endEndorament && <span className='end-endorament'>{endEndorament}</span>}
                {startEndorament && <span className='start-endorament'>{startEndorament}</span>}
                <span className='Form-Border position-absolute start-0 end-0 bottom-0 top-0'></span>
                <span className='Form-Label position-absolute'>{label}</span>
            </label>
        )
    }
    return App;
}

export default withFormField;