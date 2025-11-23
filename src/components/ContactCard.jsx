import EmailInput from "./inputs/EmailInput";
import RadioInput from "./inputs/RadioInput";
import TextInput from "./inputs/TextInput";

const ContactCard = () => {
  return (
    <div className="w-full mx-3 px-6 py-8 bg-white rounded-xl md:max-w-[600px] xl:max-w-[750px]">
      <div>
        <h1>Contact Us</h1>
      </div>

      <form className="my-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">
          <TextInput label="First Name" name="first_name" required />
          <TextInput label="Last Name" name="last_name" required />
        </div>
        <div className="my-3">
          <EmailInput label="Email Address" name="email" required />
        </div>
        <div className="w-full">
          <RadioInput />
        </div>
      </form>
    </div>
  );
};

export default ContactCard;
