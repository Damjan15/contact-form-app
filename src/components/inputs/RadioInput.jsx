const RadioInput = ({ onChange, required = false, error = false }) => {
  return (
    <div className="input-wrapper">
      <label className="input-label">Query Type *</label>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">
        <div className="radio-input">
          <input
            type="radio"
            name="general"
            value="general"
            onChange={onChange}
            required={required}
          />
          <label htmlFor="general" className="radio-input-label">
            General
          </label>
        </div>

        <div className="radio-input">
          <input
            type="radio"
            name="support"
            value="support"
            onChange={onChange}
            required={required}
          />
          <label htmlFor="support" className="radio-input-label">
            Support Request
          </label>
        </div>
      </div>

      {error && (
        <span className="input-error-message">Please select a query type</span>
      )}
    </div>
  );
};

export default RadioInput;
