const TextInput = ({
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
      <input
        type="text"
        className={`input ${error && "error"}`}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
      />
      {error && <span className="input-error-message">{error}</span>}
    </div>
  );
};

export default TextInput;
