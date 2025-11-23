import successCheck from "../assets/icon-success-check.svg";

const SuccessMessage = () => {
  return (
    <div className="mb-6 p-4 rounded-md bg-grey-900 text-white">
      <div className="flex items-center gap-2">
        <img src={successCheck} alt="success-check-icon" />
        <span className="font-bold font-karla">Message Sent!</span>
      </div>
      <p className="text-[14px] mt-2 text-green-200 opacity-90 font-karla">
        Thanks for completing the form. We'll be in touch soon!
      </p>
    </div>
  );
};

export default SuccessMessage;
