import CheckboxInput from "./inputs/CheckboxInput";
import EmailInput from "./inputs/EmailInput";
import RadioInput from "./inputs/RadioInput";
import TextAreaInput from "./inputs/TextAreaInput";
import TextInput from "./inputs/TextInput";

const ContactCard = () => {
  return (
    <div className="w-full bg-white rounded-xl p-6 md:p-12 md:max-w-[600px] xl:max-w-[750px]">
      <div>
        <h1>Contact Us</h1>
      </div>

      <form className="flex flex-col space-y-6 mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">
          <TextInput label="First Name" name="first_name" required />
          <TextInput label="Last Name" name="last_name" required />
        </div>
        <div className="w-full">
          <EmailInput label="Email Address" name="email" required />
        </div>
        <div className="w-full">
          <RadioInput />
        </div>
        <div className="w-full">
          <TextAreaInput label="Message" name="message" required />
        </div>
        <div className="w-full">
          <CheckboxInput />
        </div>

        <button className="btn">Submit</button>
      </form>
    </div>
  );
};

export default ContactCard;
