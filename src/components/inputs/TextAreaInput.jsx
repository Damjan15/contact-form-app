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
      <label className="input-label">
        {label} {required && <span className="text-green-600">*</span>}
      </label>
      <textarea
        type="text"
        className={`textarea ${error && "error"}`}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        rows="3"
      ></textarea>
      {error && <span className="input-error-message">{error}</span>}
    </div>
  );
};

export default TextAreaInput;
