const CheckboxInput = () => {
  return (
    <div className="flex items-center space-x-3">
      <input type="checkbox" name="consent" value="consent" />
      <label
        htmlFor="consent"
        className="text-[16px] leading-[150%] text-grey-900"
      >
        I consent to being contacted by the team *
      </label>
    </div>
  );
};

export default CheckboxInput;
