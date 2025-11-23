const CheckboxInput = ({ checked, onChange, error }) => {
  return (
    <div className="flex items-center space-x-3">
      <input
        type="checkbox"
        id="consent"
        name="consent"
        checked={checked}
        onChange={onChange}
      />
      <label
        htmlFor="consent"
        className="text-[16px] leading-[150%] text-grey-900"
      >
        I consent to being contacted by the team *
      </label>
      {error && <span className="input-error-message">{error}</span>}
    </div>
  );
};

export default CheckboxInput;
