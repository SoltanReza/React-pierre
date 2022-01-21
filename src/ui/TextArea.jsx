import withFormField from "./withFormField/withFormField";

const TextArea = props => <textarea {...props} ></textarea>

export default withFormField(TextArea);