const EmailInput = ({
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
      <input
        type="email"
        className={`input ${error && "error"}`}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
      />
      {error && <span className="input-error-message">Error Message</span>}
    </div>
  );
};

export default EmailInput;
