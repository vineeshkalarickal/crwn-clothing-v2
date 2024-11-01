import "./form-input.styles.scss";
const FormInput = ({ label, ...otherProps }) => {
  //const FormInput = ({ label, inputProps }) => {
  return (
    <div className="group">
      {/* When you move the label above this input field then the shrinking wont be effect when you focused. The &:focus ~ .form-input-label selector is a sibling combinator. It applies styles to the .form-input-label when the .form-input is focused. The @include shrinkLabel(); part indicates that there's a mixin named shrinkLabel() defined elsewhere in your SCSS code. This mixin likely contains styles to make the label smaller and move it above the input field when the input is focused. This effect is common in form designs to enhance usability and clarity. */}
      <input {...otherProps} className="form-input" />
      {/* <input {...inputProps} className="form-input" /> */}
      {/** if lebel existst show label*/}
      {label && (
        <label
          className={`${
            otherProps.value.length ? "shrink" : ""
            //inputProps.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}:
        </label>
      )}
    </div>
  );
};

export default FormInput;
