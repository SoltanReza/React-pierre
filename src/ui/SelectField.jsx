import withFormField from "./withFormField/withFormField";

const SelectField = props => <input {...props} />

export default withFormField(SelectField, true);