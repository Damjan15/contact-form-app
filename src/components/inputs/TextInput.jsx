const TextInput = ({
  label,
  name,
  value,
  onChange,
  error = false,
  required = false,
}) => {
  return (
    <div className="flex flex-col space-y-1.5">
      <label className="input-label">{label}</label>
      <input
        type="text"
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

export default TextInput;
