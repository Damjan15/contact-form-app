const RadioInput = ({
  onChange,
  selectedValue,
  required = false,
  error = null,
}) => {
  return (
    <div className="input-wrapper">
      <label className="input-label">
        Query Type {required && <span className="text-green-600 ml-1">*</span>}
      </label>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">
        <div
          className={`radio-input ${
            selectedValue === "general" ? "selected" : ""
          }`}
          onClick={() =>
            onChange({ target: { name: "queryType", value: "general" } })
          }
        >
          <input
            type="radio"
            name="general"
            value="general"
            checked={selectedValue === "general"}
            onChange={onChange}
            required={required}
          />
          <label htmlFor="general" className="radio-input-label">
            General
          </label>
        </div>

        <div
          className={`radio-input ${
            selectedValue === "support" ? "selected" : ""
          }`}
          onClick={() =>
            onChange({ target: { name: "queryType", value: "support" } })
          }
        >
          <input
            type="radio"
            name="support"
            value="support"
            checked={selectedValue === "support"}
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
