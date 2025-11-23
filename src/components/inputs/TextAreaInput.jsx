const TextAreaInput = ({
  label,
  name,
  value,
  onChange,
  error = false,
  required = false,
}) => {
  return (
    <div className="input-wrapper">
      <label className="input-label">{label} *</label>
      <textarea
        type="text"
        className={`textarea ${error && "error"}`}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        rows="3"
      ></textarea>
      {error && <span className="input-error-message">Error Message</span>}
    </div>
  );
};

export default TextAreaInput;
